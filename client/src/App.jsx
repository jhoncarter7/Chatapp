import "./App.css";
import Home from "./pages/home/Home";
// import LogIn from "./pages/login/LogIn";
// import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="p-4 flex h-screen item-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
     <Home/>
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
