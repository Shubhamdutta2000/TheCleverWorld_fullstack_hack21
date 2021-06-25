import express from "express";
import {
  authUser,
  createUser,
  getUserProfile,
  registerForVaccine,
} from "../controller/UserController.js";
import { authProtect } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/signup", createUser);
router.get("/profile", authProtect, getUserProfile);
router.post("/register", authProtect, registerForVaccine);

export { router as userRouter };
