import express from "express";
import {
  createDrive,
  createStandPoint,
  getDriveUserData,
} from "../controller/AuthoritiesController.js";
import { authProtect, authorityCheck } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post(
  "/create-stand-point",
  authProtect,
  authorityCheck,
  createStandPoint
);
router.post("/createDrive", authProtect, authorityCheck, createDrive);
router.post("/get-registered-users", authProtect, authorityCheck, getDriveUserData);

export { router as authoritiesRouter };
