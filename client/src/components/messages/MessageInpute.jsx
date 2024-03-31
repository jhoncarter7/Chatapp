import { BiSolidSend } from "react-icons/bi";
import { useState } from "react";
import useSendMessage from "../../Hooks/useSendMessage";

const MessageInpute = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("message", message);
    if (!message) return;
    console.log("message success", message);
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
          placeholder="send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className="loading loading-spinner"></span>
          ) : (
            <BiSolidSend />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInpute;
