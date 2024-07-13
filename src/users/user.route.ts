import { Hono } from "hono";

const Users = new Hono();

Users.get("/", (c) => {
  return c.json({ message: "Hello the new Users!" });
});

export default Users;
