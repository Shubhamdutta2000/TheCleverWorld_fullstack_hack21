import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const getUserCoordinates = asyncHandler(async (req, res) => {
  const allUsers = await User.find().select("geometry");

  //   console.log(request);

  let geoJsonFeature = {
    type: "FeatureCollection",
    features: [],
  };

  allUsers.forEach((user) => {
    geoJsonFeature.features.push({
      properties: {},
      geometry: user.geometry,
    });
  });

  res.status(200).send(geoJsonFeature);
});
