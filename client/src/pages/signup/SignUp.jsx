import React from 'react'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center">
          Signup
          <span className="text-green-600">ChatApp</span>
        </h1>
        <form action="" className="space-y-2">
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Your FullName"
              className="input input-bordered w-full  h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Your UserName"
              className="input input-bordered w-full  h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full  h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Password</span>
            </label>
            <input
              type="text"
              placeholder="Your Password"
              className="input input-bordered w-full  h-10"
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">ConfirmPassword</span>
            </label>
            <input
              type="password"
              placeholder="Your ConfirmPassword"
              className="input input-bordered w-full  h-10"
            />
          </div>

          <a href="#" className=" hover:underline hover:text-blue-600 inline-block">
          have an account? Sign In
          </a>

          <button className="btn btn-block btn-sm">Signup</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp