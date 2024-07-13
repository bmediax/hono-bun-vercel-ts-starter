import app from "./src/app";

const server = Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 4000,
});

console.log("server running", `https://localhost:${server.port}`);
