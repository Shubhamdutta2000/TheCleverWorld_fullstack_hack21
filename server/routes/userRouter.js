import express from "express";
import {
  authUser,
  createUser,
  getStandPoint,
  getUserProfile,
  registerForVaccine,
} from "../controller/UserController.js";
import { authProtect } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/signup", createUser);
router.get("/profile", authProtect, getUserProfile);
router.get("/get-stand-points", authProtect, getStandPoint);
router.post("/register-for-vaccine", authProtect, registerForVaccine);

export { router as userRouter };
