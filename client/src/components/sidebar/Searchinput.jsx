import { AiOutlineSearch } from "react-icons/ai";

const Searchinput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="search" placeholder="search..." className="input input-bordered rounded-full h-10" />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
            <AiOutlineSearch className="w-6 h-6 outline-none"/>
        </button>
    </form>
  )
}

export default Searchinput