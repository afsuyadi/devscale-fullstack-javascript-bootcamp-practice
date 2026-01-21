import { Hono} from "hono";
import { zValidator } from "@hono/zod-validator";
import { registerSchema, loginSchema } from "./schema";
import { prisma } from "../utils/prisma.js";
import { HTTPException } from "hono/http-exception";
import { hashPassword, comparePassword } from "./utils";
import jwt from "jsonwebtoken";

export const authRouter = new Hono()
.post("/register", zValidator("json", registerSchema), async (c) => {
    const body = c.req.valid('json');

    const existingUser = await prisma.user.findUnique({
        where : {
            email : body.email
        },
    });

    if (existingUser) {
        throw new HTTPException(409, { message : "User has already existed"});
    }
    
    const newUser = await prisma.user.create({
        data : {
            email : body.email,
            password : await hashPassword(body.password)
        }
    })

    return c.json({ message: "User registered successfully", newUser });
})
.post("/login", zValidator("json", loginSchema), async (c) => {
    const body = c.req.valid('json');

    const existingUser = await prisma.user.findUnique({
        where : {
            email : body.email
        },
    });

    if (!existingUser) {
        throw new HTTPException(404, { message : "User not found"});
    }

    const isPasswordValid = await comparePassword(body.password,  existingUser.password);

    if (!isPasswordValid) {
        throw new HTTPException(401, { message : "Invalid password"});
    }

    const token = jwt.sign({sub : existingUser.id}, process.env.JWT_SECRET!)

    return c.json({ message: "User logged in successfully", token });
})