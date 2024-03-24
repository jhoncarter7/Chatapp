
const LogIn = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center">
          Login
          <span className="text-green-600">ChatApp</span>
        </h1>
        <form action="" className="space-y-4">
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Type UserName"
              className="input input-bordered w-full  h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type Password"
              className="input input-bordered w-full  h-10"
            />
          </div>

          <a href="#" className=" hover:underline hover:text-blue-600 ">
           {"Don't"} have an account? Sign Up
          </a>

          <button className="btn btn-block btn-sm">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
