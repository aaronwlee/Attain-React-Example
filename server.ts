import { App, staticServe, logger, security } from "./serverDeps.ts";
import routers from "./controllers/routers.ts";

const app = new App();
app.use(security());
app.use(logger);

app.use("/api", routers);
app.error("/api", routers);

app.listen({ port: 3500 });
