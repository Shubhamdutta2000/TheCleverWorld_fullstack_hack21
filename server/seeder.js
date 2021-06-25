import mongoose from "mongoose";
import { connectDB } from "./config/db.js";

import dotenv from "dotenv";
import StandPoint from "./models/standPoint.js";
import UserModel from "./models/userModel.js";

import { mockStandPoints } from "./mockData/standpoint.js";
import { mockUsers } from "./mockData/user.js";

dotenv.config();

connectDB();

/**
 * imports seeder data to MongoDB Atlas
 */
const importData = async () => {
  try {
    // delete stuff before inserting new stuff
    await StandPoint.deleteMany();

    // insert new stuff
    await StandPoint.insertMany(mockStandPoints);
    await UserModel.insertMany(mockUsers);

    // extract admin user from DB (first in the array). get it into our mock foodreq array.
    // const volunteerUsers = createdUsers[0]._id;

    console.info("data imported");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

// destroy all data in mongoDB database
const destroyData = async () => {
  try {
    // delete stuff
    await StandPoint.deleteMany();

    console.info("data destroyed");
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
