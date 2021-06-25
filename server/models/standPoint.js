import mongoose from "mongoose";

// Location schema for the user
const GeoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "point",
  },
  coordinates: {
    type: [Number],
    index: "2dsphere",
  },
});

const StandPointSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
    },
    geometry: GeoSchema,
    numberOfUser: {
      type: Number,
      default: 0,
    },
    assignedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const standPoint = mongoose.model("StandPoint", StandPointSchema);
export default standPoint;
