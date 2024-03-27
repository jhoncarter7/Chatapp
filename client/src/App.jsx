import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="p-4 flex h-screen item-center justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
