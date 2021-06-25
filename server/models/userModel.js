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
    email: {
      type: String,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phoneNumber: {
      type: Number,
      unique: true,
      validate: {
        validator: function (v) {
          return /d{10}/.test(v);
        },
        message: "{VALUE} is not a valid 10 digit number!",
      },
    },
    preferences: [
      {
        order: { type: Number, default: 1 },
        point: { type: mongoose.Schema.Types.ObjectId, ref: "StandPoint" },
      },
    ],
    standPointAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StandPoint",
    },
    isVaccinated: {
      type: Boolean,
      default: false,
    },
    isAuthority: {
      type: Boolean,
      default: false,
    },
    serialNumber: {
      type: Number,
    },
    password: {
      type: String,
      required: [true, "Your password cannot be blank"],
    },
    geometry: GeoSchema,
    // for easy viewing in the front end
    mapViewStandPoints: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StandPoint",
      },
    ],
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
