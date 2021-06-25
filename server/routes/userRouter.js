import express from "express";
import { authUser, createUser } from "../controller/UserController.js";
import { authProtect } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/login", authUser);
router.post("/signup", createUser);

export { router as userRouter };
