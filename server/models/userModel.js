import mongoose from "mongoose";
import bcrypt from "bcrypt";

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

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    phn_no: {
        type: Number,
    },
    preferences: {
      type: String,
    },
    stand_point: {
      type: String,
    },
    isVaccinated: {
      type: Boolean,
    },
    serial_no: {
      type: Number,
    },
    selected_stand_point: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Your password cannot be blank"],
    },
    geometry: GeoSchema,
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
  let isValidPassword = await bcrypt.compare(enteredPassword, this.password);
  return isValidPassword;
};

UserSchema.pre("save", async function (next) {
  // in case of updates, don't hash password if not modified
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", UserSchema);
export default User;
