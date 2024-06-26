import useListenMessage from "../../Hooks/useListenMessage";
import { useAuthcontext } from "../../context/authContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";


const Message = ({message}) => {
  const {authUser} = useAuthcontext()
  useListenMessage()
  const {selectedConversation} = useConversation()

  const fromMe = message.senderId ===  authUser.data.user?._id
  const formattedTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? "chat-end" : "chat-start"
  const profilePic = fromMe ? authUser.data.user?.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? "bg-blue-500" : ""
  const shakeClass =  message.shouldShake ? "shake" : "";
  
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div className={`chat-bubble text-white  ${bubbleBgColor} ${shakeClass}`}>{message?.message}</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;
