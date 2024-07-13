import { Hono } from "hono";

const book = new Hono();

book.get("/", (c) => {
  return c.json({ message: "Hello 📕!" });
});

export default book;
