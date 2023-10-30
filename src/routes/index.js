import { Router } from "express";
import {
  getUsers,
  deleteUser,
  createUser,
  updateUser,
  getUserById,
} from "../controllers";

const router = new Router();

router.get("/users", getUsers);
router.get("/users/:userId", getUserById);
router.post("/users", createUser);
router.put("/users", updateUser);
router.delete("/users/:userId", deleteUser);

export default router;
