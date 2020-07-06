import { App, staticServe, logger, security } from "./serverDeps.ts";
import routers from "./controllers/routers.ts";

const app = new App();
app.use(security());
app.use(logger);

app.use("/api", routers);
app.error("/api", routers);

app.get("/*", async (req, res) => {
  console.log("2");
  const { pathname } = req.url;
  const isReactPath = pathname.split(".").length === 1;

  if (isReactPath) {
    await res.sendFile("./.attain/index.html");
  }
}, staticServe("./.attain", { maxAge: 1000 }));

app.listen({ port: 3500 });
