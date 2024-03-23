import { ApiError } from "../utils/ApiError.js";

const sendMessages = async(req, res) => {
    
    try {
        const {message} = req.body;
        const {id} = req.params.id
        const sender = req.userId
        console.log(message, id, sender)
        res.status(200).json({message, id, sender})

    } catch (error) {
        throw new ApiError(500,{ error: error.message})
    }
}

export {sendMessages}