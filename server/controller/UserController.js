import mongoose from "mongoose";
import generateToken from "../utils/generateJwt.js";
import User from "../models/userModel.js";

/**
 * @description authenticate existing users and get auth token
 * @route GET /api/users/login
 * @public
 *
 */

// Not working lol

export const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      geometry: user.geometry,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("email or password is invalid");
  }
};

/**
 * @description register a new user
 * @route POST /api/users/
 * @public
 */
export const createUser = async (req, res) => {
  const { name, phn_no, password, geometry } = req.body;
  const user = await User.findOne({ email: email });

  if (user) {
    res.status(401);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    phn_no,
    password,
    geometry,
  });

  // send auth token as well

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      phn_no: newUser.phn_no,
      geometry: newUser.geometry,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
};
