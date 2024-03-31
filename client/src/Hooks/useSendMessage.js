import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
  const { messages, setMessages, selectedConversation } = useConversation();
  const [loading, setLoading] = useState(false);

  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/v1/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message,
          }),
        }
      );
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      console.log("messages", messages, "data", data.data);
      setMessages([...messages, data.data]);
      console.log(messages);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
