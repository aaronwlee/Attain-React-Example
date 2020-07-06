import { Router } from "../serverDeps.ts";
import User from "../models/user.ts";

const userController = new Router();

// handle user routes
userController.get("/", (req, res) => {
  const users = Array.from(User.values());
  res.send(users);
});

// handle user errors
userController.error("/", userController);

export default userController;
