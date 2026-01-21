import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { authRouter } from './modules/auth/route';
import { productRouter} from './modules/products/route';
import { reviewsRouter} from './modules/reviews/route';
import "dotenv/config";

const app = new Hono();

app.route("/auth", authRouter)
app.route("/products", productRouter)
app.route("/reviews", reviewsRouter)

// app.get('/', (c) => {
//   return c.text('Hello Hono!')
// })

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
