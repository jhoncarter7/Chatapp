import { ApiError } from "../utils/ApiError.js";
import { User } from "../model/User.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const signUpUser = async function (req, res, next) {
  try {
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
    const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const user = await User.create({
      fullName,
      userName,
      email,
      password,
      gender,
      profilePic: "male" ? boyAvatar : girlAvatar,
    });

    const createdUser = await User.findById(user._id).select("-password");

    if (!createdUser) {
      throw new ApiError(
        500,
        "Something went wrong while registering the user"
      );
    }

    return res
      .status(201)
      .json(new ApiResponse(200, createdUser, "User successfully created"));
  } catch (error) {
   res.status(500).json({error: error.message})
  }
};

const loginUser = async (req, res) => {
  try {
    
 
  const { userName, email, password } = req.body;

  if (!(userName || email)) {
    throw new ApiError(400, "All fields are required");
  }

  const userExist = await User.findOne({
    $or: [{ userName }, { email }],
  });

  if (!userExist) {
    throw new ApiError(404, "User does not exist");
  }
  const correctPassword = await userExist.isPasswordCorrect(password);

  if (!correctPassword) {
    throw new ApiError(401, "Invalid credentials");
  }

  const accessToken = await userExist.generateAccessToken();
   
  const loggedinUser = await User.findById(userExist._id).select("-password");

  const options = {
    httpOnly: true,
    secure: true,
  };
  return res.status(200).cookie("accessToken", accessToken, options).json( new ApiResponse(200, {user: loggedinUser, accessToken}, "user is successfully loggedin" ));
} catch (error) {
  console.log(error.message);
  res.status(500).json({error: error.message})
}
};

const logoutUser = async (req, res) => {
try {
  return res.clearCookie("accessToken").json(new ApiResponse(200, {}, "User successfully logged out"));
} catch (error) {
  res.status(500).json({error: error.message})
}
};

export { loginUser, signUpUser, logoutUser };
