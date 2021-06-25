import mongoose from "mongoose";

const VaccineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      enum: ["COVAXIN", "COVISHIELD", "SPUTNIK"],
    },
    vaccineNumber: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const vaccine = mongoose.model("Vaccine", VaccineSchema);
export default vaccine;
