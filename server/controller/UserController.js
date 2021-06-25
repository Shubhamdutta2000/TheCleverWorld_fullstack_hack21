import generateToken from "../utils/generateJwt.js";
import User from "../models/userModel.js";
import standPoint from "../models/standPoint.js";

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
      phoneNumber: user.phoneNumber,
      adhaarNumber: user.adhaarNumber,
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

// @purpose:   POST preference of Stand point by User
// @route:  GET /preferences
// @access  Private
/* 
      preferences: {
        order: Number,
        standPointId: id,
      }
*/

export const choosePreference = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const { preferences } = req.body;

    // Check the user by userId
    const user = await User.findById(userId).populate("preferences");

    if (user) {
      preferences.forEach((preference) => {
        // Add standPointId and order to preferences array
        user.preferences.push({
          order: preference.order,
          point: preference.standPointId,
        });
        user.save();
      });
      res.status(200).json(user);
    } else {
      res.status(403);
      throw new Error("User not matched");
    }
  } catch (error) {
    res.status(404);
    next(error);
  }
};
