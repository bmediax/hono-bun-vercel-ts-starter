import { Hono } from "hono";
import book_route from "./book";
import { logger } from "hono/logger";
import users_route from "./users/user.route";

const app = new Hono();

app.use("*", logger());

app.get("/", (c) => {
  return c.json({ message: "Hello 🔥" });
});

app.route("/book", book_route);
app.route("/users", users_route);

export default app;
