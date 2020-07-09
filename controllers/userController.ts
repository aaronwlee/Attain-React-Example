import { Router } from "@attain";
import { getUsers } from "../services/userService.ts";

const userController = new Router();

// handle user routes
userController.get("/", (req, res) => {
  const users = getUsers();
  res.send(users);
});

// handle user errors
userController.error("/", (error, req, res) => {
  console.error("error", error.message)
  res.status(404).send({ message: error.message })
});

export default userController;
