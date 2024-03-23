import Conversation from "../model/Conversation.model.js";
import Message from "../model/Message.model.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const sendMessages = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recevierId } = req.params;
    const senderId = req.user?._id;

    console.log("message", message,"recevierId", recevierId, "senderId", senderId)
     if(!message || !recevierId || !senderId){
        console.log("message", message,"recevierId", recevierId, "senderId", senderId)
        throw new ApiError(400, "All fields are required");
     }
    let conversation = await Conversation.findOne({
        participants: { $all: [senderId, recevierId] },
    });
    console.log("conversation", conversation)
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recevierId],
      });
    }
  console.log("conversation2", conversation)
    const newMessage = await Message.create({
      senderId,
      recevierId,
      message,
    });

    if(newMessage){
     conversation.messages.push(newMessage._id)
    }
   await conversation.save()

    res.status(201).json(new ApiResponse(200, newMessage, "Message sent"));
  } catch (error) {
    console.log(error.message);
    throw new ApiError(500, { error: error.message });
  }
};

export { sendMessages };
