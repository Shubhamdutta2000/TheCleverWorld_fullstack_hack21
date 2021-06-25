import express from "express";
import {
  authUser,
  choosePreference,
  createUser,
  getUserProfile,
} from "../controller/UserController.js";
import { authProtect } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/signup", createUser);
router.get("/profile", authProtect, getUserProfile);
router.post("/preferences", authProtect, choosePreference);

export { router as userRouter };
