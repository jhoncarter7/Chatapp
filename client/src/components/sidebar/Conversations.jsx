import useGetConversations from "../../Hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emoji";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations?.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji = {getRandomEmoji()}
          lastIndex={index === conversation.length - 1}
       
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
