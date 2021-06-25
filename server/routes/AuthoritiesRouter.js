import express from "express";
import { authProtect } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/createDrive");

export { router as authoritiesRouter };
