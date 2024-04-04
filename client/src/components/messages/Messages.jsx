import useGetMessage from "../../Hooks/useGetMessage";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessage();

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && messages?.map((message)=> <Message key={message._id} message={message}/>)}
      {loading &&
        [...Array(3)].map((_, indx) => <MessageSkeleton key={indx} />)}
        {
          !loading && messages.length === 0 && ( <p className="text-center text-gray-400">No messages yet</p>)
        }

    </div>
  );
};

export default Messages;
