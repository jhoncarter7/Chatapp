import { Link } from "react-router-dom"
import { GenderCheckbox } from "./GenderCheckbox"
import { useState } from "react"
import useSignup from "../../Hooks/useSignup"

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })
  
  const gendertype = (setgen) =>{
    setInputs({...inputs, gender: setgen})
  }

  const {loading, signup} = useSignup()
  const SubmitHandler = (e) => {
    e.preventDefault()
    signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center md:min-w-96 mx-auto">
      <div className="w-full p-4 bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center">
          Signup
          <span className="text-green-600">ChatApp</span>
        </h1>
        <form onSubmit={SubmitHandler} >
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">FullName</span>
            </label>
            <input
              type="text"
              placeholder="Your FullName"
              className="input input-bordered w-full  h-8 bg-slate-700"
              alt="FullName"
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Username</span>
            </label>
            <input
              type="text"
              placeholder="Your UserName"
              className="input input-bordered w-full  h-8 bg-slate-700"
              value={inputs.userName}
              onChange={(e)=> setInputs({...inputs, userName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full  h-8 bg-slate-700"
              value={inputs.email}
              onChange={(e)=> setInputs({...inputs, email: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">Password</span>
            </label>
            <input
              type="text"
              placeholder="Your Password"
              className="input input-bordered w-full  h-8 bg-slate-700"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-1">
              <span className="text-base label-text font-medium">ConfirmPassword</span>
            </label>
            <input
              type="password"
              placeholder="Your ConfirmPassword"
              className="input input-bordered w-full  h-8 bg-slate-700"
              value={inputs.confirmPassword}
              onChange={(e)=> setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>
            <GenderCheckbox passingGender = {gendertype} selectedGender={inputs.gender}/>
          <Link to="/login" className=" hover:underline hover:text-blue-600 inline-block">
          have an account? Sign In
          </Link>
      
          <button className="btn glass btn-block btn-md" disabled={loading}>
            {!loading ? "Signup" : <span className="loading loading-spinner"></span>}
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp