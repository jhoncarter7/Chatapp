import Conversation from "../model/Conversation.model.js";
import Message from "../model/Message.model.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const sendMessages = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recevierId } = req.params;
    const senderId = req.user?._id;

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

const getMessages = async(req, res)=>{
try {
  const {id: userToChatId} = req.params;
  const senderId = req.user?._id;

  const conversation =  await Conversation.findOne({
    participants: { $all: [senderId, userToChatId]}
  }).populate("messages")

  if(!conversation){
  res.status(200).json(new ApiResponse(200, [], "No messages found"))
  }

  const message = conversation.messages;

 return res.status(200).json(new ApiResponse(200, message, "Messages found"))

} catch (error) {
  console.log("Error in getMessage controller", error.message)
  throw new ApiError(500, {error: error.message})
}
}

export { sendMessages, getMessages };
