import express from "express";
import { createDrive } from "../controller/AuthoritiesController.js";
import { authProtect } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/createDrive", createDrive);

export { router as authoritiesRouter };
