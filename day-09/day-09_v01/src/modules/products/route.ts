import { Hono } from "hono";
import { authMiddleware } from "../../middleware/authMiddleware";


interface Context {
    Variables : {
            user : {
                id : number;
                email : string;
            }
        }
}
export const productRouter = new Hono<Context>()
.use(authMiddleware)
.get("/", async (c) => {
    const user = c.get("user");
    console.log(user)
    return c.json({ products : []});

})
.get("/:id", async (c) => {
    return c.json({ products : {}})
})