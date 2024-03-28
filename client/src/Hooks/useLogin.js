import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthcontext } from "../context/authContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false)
     const {setAuthUser} = useAuthcontext()
    const login = async({userName, email, password}) =>{

        if(!userName || !email || !password){
            toast.error("Please fill all fields")
            return false
        }

        setLoading(true)
     try {
        const res = await fetch("/api/v1/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userName,
                email,
                password
            })
    
            })
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user", JSON.stringify(data))
            setAuthUser(data)
            toast.success(data.message)
     } catch (error) {
        toast.error(error.message)
        return false
     }finally{
         setLoading(false)
     }
    }

    return {loading, login}
}

export default useLogin 