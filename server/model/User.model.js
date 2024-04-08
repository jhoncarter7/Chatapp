import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



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

//hash password before saving
userSchema.pre("save",  async function (next){
  if(!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10)
  next()
})

//compare password
userSchema.methods.isPasswordCorrect = async function(password){
  return  await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
 return  jwt.sign({
     _id: this._id,
     fullName: this.fullName,
     userName: this.userName,
     email: this.email,
     gender: this.gender,
   },
   process.env.JWT_SECRET, // this should be outside the curly braces
   {
    expiresIn: "15d",
   })
}

 export const User = mongoose.model("User", userSchema)