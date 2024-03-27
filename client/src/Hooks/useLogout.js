import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthcontext } from "../context/authContext"

const useLogout = () =>{
 const [loading, setLoading] = useState(false)
 const {setAuthUser} = useAuthcontext()
    const logout = async ()=>{
     setLoading(true)
     try {
        const res = await fetch("/api/v1/auth/logout") 
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("chat-user")
        setAuthUser(null)

     } catch (error) {
        toast.error(error.message)
     }finally{
        setLoading(false)
     }
    }
    return {loading, logout}
}

export default useLogout