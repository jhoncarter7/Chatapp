import { ApiError } from "../utils/ApiError.js";
import { User } from "../model/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signUpUser = async (req, res) => {
  const {
    fullName,
    userName,
    email,
    password,
    confirmPassword,
    gender,
    profilePic,
  } = req.body;

  if (
    [fullName, userName, email, password, confirmPassword, gender].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }
  if (password !== confirmPassword) {
    throw new ApiError(400, "passwords do not match");
  }

  const ExistingUser = await User.findOne({
    $or: [{ email }, { userName }],
  });

  if (ExistingUser) {
    throw new ApiError(400, "User already exist");
  }

  const user = await User.create({
    fullName,
    userName,
    email,
    password,
    gender,
    profilePic,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .send(201)
    .json(new ApiResponse(200, createdUser, "User successfully created"));
};

const loginUser = async (req, res) => {
  res.send("login user");
};

const logoutUser = async () => {
  res.send("logout user");
};

export { loginUser, signUpUser, logoutUser };
