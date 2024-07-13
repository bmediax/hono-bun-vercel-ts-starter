import { Hono } from "hono";
import book_route from "./pages";

const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Hello 🔥" });
});

app.route("/book", book_route);

export default app;
