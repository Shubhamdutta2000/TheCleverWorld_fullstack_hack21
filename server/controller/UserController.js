import generateToken from "../utils/generateJwt.js";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import StandPoint from "../models/standPoint.js";
import afterRegisterMail from "../mailer/afterRegisterMail";

/**
 * @description authenticate existing users and get auth token
 * @route GET /api/users/login
 * @public
 *
 */

// Not working lol

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  console.log(user);
  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      adhaarNumber: user.adhaarNumber,
      isVaccinated: user.isVaccinated,
      isRegistered: user.isRegistered,
      isAuthority: user.isAuthority,
      geometry: user.geometry,
      serialNumber: user.serialNumber,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("email or password is invalid");
  }
});

/**
 * @description register a new user
 * @route POST /api/users/
 * @public
 */
export const createUser = async (req, res) => {
  const { name, phoneNumber, adhaarNumber, email, password, geometry } =
    req.body;
  const user = await User.findOne({ email: email });

  if (user) {
    res.status(401);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    adhaarNumber,
    phoneNumber,
    password,
    geometry,
  });

  // send auth token as well

  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      adhaarNumber: newUser.adhaarNumber,
      geometry: newUser.geometry,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
};

// @purpose:   Get User Profile
// @route:  GET /user/profile
// @access  Private

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).populate("vaccine");
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      adhaarNumber: user.adhaarNumber,
      geometry: user.geometry,
      vaccine: user.vaccine,
    });
  } catch (error) {
    res.status(404);
    next(error);
  }
};

// @purpose:   GET Stand point of User (assigned by authority)
// @route:  POST /get-stand-points
// @access  Private

export const getStandPoint = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate("mapViewStandPoints");
    res.json(user.mapViewStandPoints);
  } catch (error) {
    res.status(404);
    throw Error(error);
  }
});

// @purpose:   POST preference of Stand point by User
// @route:  POST /register-for-vaccine
// @access  Private
/* 
    preferences: [id]
*/

export const registerForVaccine = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { preferenceId } = req.body;

    // Check the user by userId
    const user = await User.findById(userId);

    if (user) {
      user.preferences = preferenceId;

      // Check if seat is full
      if (user.preferences?.numberOfUser === 0) {
        res.status(404);
        throw new Error("Drive is full!!");
      }

      // Assign stand Point
      user.standPointAssigned = preferenceId;
      await user.save();

      console.log("USER", user);

      const standPoint = await StandPoint.findById(user.standPointAssigned);
      console.log(standPoint);

      if (standPoint.numberOfUser !== 0) {
        // Reduce NuumberOfUser left in StandPoint
        standPoint.numberOfUser -= 1;
        await standPoint.save();

        // Assign Serial Number
        user.serialNumber = 30 - standPoint.numberOfUser;
        user.isRegistered = true;
      } else {
        res.status(404);
        throw new Error("Drive is Full");
      }
      // save user
      await user.save();

      // Send mail after registeration
      afterRegisterMail(user, standPoint);
      res.status(200).json(user);
    } else {
      res.status(403);
      throw new Error("User not matched");
    }
  } catch (error) {
    res.status(404);
    next(error);
  }
});
