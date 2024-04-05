import { useEffect, useRef } from "react";
import useGetMessage from "../../Hooks/useGetMessage";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessage();

  const lastMessageRef = useRef();
  useEffect(() => {
      setTimeout(()=> {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 1000)
  
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages?.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading &&
        [...Array(3)].map((_, indx) => <MessageSkeleton key={indx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-400">No messages yet</p>
      )}
    </div>
  );
};

export default Messages;
