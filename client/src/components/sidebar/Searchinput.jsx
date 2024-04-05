import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../Hooks/useGetConversations";
import { toast } from "react-hot-toast";
const Searchinput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3)
      toast.error("Search query must be at least 3 characters long");

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found");
    }
  };
  return (
    <form onSubmit={submitHandler} className="flex items-center gap-2">
      <input
        type="search"
        placeholder="search..."
        className="input input-bordered rounded-full h-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <AiOutlineSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default Searchinput;
