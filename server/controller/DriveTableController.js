import mongoose from "mongoose";
import User from "../models/userModel.js";
import StandPoint from "../models/standPoint.js";
import asyncHandler from "express-async-handler";

// UserName, mobile number, stand point (id), Serial Number, isVaccinated

export const getDriveUserData = asyncHandler(async (req, res) => {
  const registeredUsers = await User.find({ isRegistered: true });

  res.status(200).send(registeredUsers);
});
