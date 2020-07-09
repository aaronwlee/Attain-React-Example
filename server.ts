import { App, reactServe, logger, security } from "@attain";
import routers from "./controllers/routers.ts";

const app = new App();
app.use(security());
app.use(logger);

app.use("/api", routers);
app.error("/api", routers);

// Client-Side Only
app.use(reactServe());
app.listen({ port: 3500 });
