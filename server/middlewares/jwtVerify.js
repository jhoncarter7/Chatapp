import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import {User} from "../model/User.model.js";

const verifyjwt = async (req, res, next) => {
  try { 
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");
     
    if (!token) {
      throw new ApiError(401, "Unauthorized user request");
    }
  
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodeToken) {
      throw new ApiError(401, "Unauthorized- invalid token");
    }
   
    const user = await User.findOne({_id: decodeToken._id}).select("-password");

    if (!user) {
      throw new ApiError(404, "User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error.message || "Unauthorized user request");
  }
};

export default verifyjwt