import Sidebar from "../../components/sidebar/Sidebar"


const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
        
     <Sidebar/>
     {/* <Messagecontainer/> */}
    </div>
  )
}

export default Home