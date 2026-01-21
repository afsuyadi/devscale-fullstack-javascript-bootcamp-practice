import { Hono } from "hono";
import { authMiddleware } from "../../middleware/authMiddleware";

export const reviewsRouter = new Hono()
.use(authMiddleware)
.get("/", async (c) => {
    return c.json({ reviews : []});
})
.get("/:id", async (c) => {
    return c.json({reviews : {}})
})
