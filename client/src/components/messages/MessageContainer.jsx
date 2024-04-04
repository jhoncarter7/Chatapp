import useConversation from "../../zustand/useConversation";
import MessageInpute from "./MessageInpute";
import Messages from "./Messages";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const MessageContainer = () => {
  const {selectedConversation} = useConversation();
 
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To: </span>
            <span className="text-gray-900 font-bold ">{selectedConversation?.fullName}</span>
          </div>
          <Messages />
          <MessageInpute />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
    <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
      <p>Welcome 👋 John doe</p>
      <p>select a chat to start messaging</p>
      <HiChatBubbleLeftRight className="text-3xl md:text-6xl text-center" />
    </div>
  </div>
  )
};

export default MessageContainer;
