import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import {User} from "../model/User.model.js"

const getUserForSideBar = async(req, res)=>{
    try {
        const loggedInUser = req.user?._id

        if(!loggedInUser){
            throw new ApiError(400, "User not found")
        }

        const  filtereduser = await User.find({_id: {$ne: loggedInUser}}).select("-password")
        
        return res.status(200).json( new ApiResponse(200, filtereduser, "successfully fetched users"))
    
    } catch (error) {
        console.log(error.message)  
        throw new ApiError(500, ({error: "internal server error"}))
    }
}

export {getUserForSideBar}