import User from "../models/user.ts";

export function getUsers() {
  const users = Array.from(User.values());
  return users;
}

export function getUserByID(id: number) {
  const user = User.get(id)
}