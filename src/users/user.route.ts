import { Hono } from "hono";
import fn from "@/utils/fn";

const Users = new Hono();

Users.get("/", (c) => {
  const ok = fn();
  console.log(ok);
  return c.json({ message: "Hello the new Users!" });
});

export default Users;
