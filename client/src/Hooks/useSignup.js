import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthcontext } from "../context/authContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthcontext()
  const signup = async ({
    fullName,
    userName,
    email,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = checkErrorHandler({
      fullName,
      userName,
      email,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return false;

    setLoading(true);
    try {
      const resp = await fetch("/api/v1/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          userName,
          email,
          password,
          confirmPassword,
          gender,
        }),
      });


      const data = await resp.json()
      if(data.error){
       throw new Error(data.error)
      }

      localStorage.setItem("chat-user", JSON.stringify(data))
      setAuthUser(data)
      toast.success(data.message);

    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const checkErrorHandler = ({
  fullName,
  userName,
  email,
  password,
  confirmPassword,
  gender,
}) => {
  if (
    !fullName ||
    !userName ||
    !email ||
    !password ||
    !confirmPassword ||
    !gender
  ) {
    toast.error("All fields are required");
    return false;
  }
  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
};

export default useSignup;
