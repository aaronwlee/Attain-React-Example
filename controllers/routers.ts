import { Router, parser } from "attain";
import userController from "./userController.ts";

const routers = new Router();
routers.use(parser);

// handle user routes
routers.use("/user", userController);

// handle user errors
routers.error("/user", userController);

export default routers;
