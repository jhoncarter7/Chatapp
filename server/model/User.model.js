import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    index: true,
    lowercase: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    index: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true,
  },

  password: {
    type: String,
    required: [true, "password is required"],
  },

  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },

  profilePic: {
    type: String,
    default: "",
  },
},{timestamps: true});


 export const User = mongoose.model("User", userSchema)