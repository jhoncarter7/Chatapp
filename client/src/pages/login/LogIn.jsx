import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../Hooks/useLogin";

const LogIn = () => {
const [input, setInputs] = useState({
  userName: "",
  email: "",
  password: ""
});
 
  const {loading, login} = useLogin()


  const submitHandler = (e) => {
    e.preventDefault();
    login(input)
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center">
          Login
          <span className="text-green-600">ChatApp</span>
        </h1>
        <form onSubmit={submitHandler} className="space-y-2">
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type UserName"
              className="input input-bordered w-full h-10 bg-slate-700"
              value={input.userName}
              onChange={(e) => setInputs({...input, userName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">email</span>
            </label>
            <input
              type="email"
              placeholder="Type Email"
              className="input input-bordered w-full h-10 bg-slate-700"
              value={input.email}
              onChange={(e) => setInputs({...input, email: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type Password"
              className="input input-bordered w-full h-10 bg-slate-700"
              value={input.password}
              onChange={(e) => setInputs({...input, password: e.target.value})}
            />
          </div>

          <Link to="/signup" className=" hover:underline hover:text-blue-600 ">
            {"Don't"} have an account? Sign Up
          </Link>

         {
          !loading ?  <button type="submit" className="btn glass btn-block btn-md">
          Login
        </button> : <span className="loading loading-spinner"></span>
         }
        </form>
      </div>
    </div>
  );
};

export default LogIn;
