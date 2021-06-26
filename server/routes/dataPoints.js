import express from "express";
import { getUserCoordinates } from "../controller/heatmapDataPoints.js";
import { authProtect, authorityCheck } from "../middlewares/verifyToken.js";

const router = express.Router();

router.get("/", getUserCoordinates);

export { router as dataPointRouter };
