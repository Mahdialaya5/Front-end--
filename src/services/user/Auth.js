import axios from "axios"
import { baseUrl } from "../baseURL"
import { currentuser, geterror } from "../../redux/user"


export  const GetCurrentUser=async(dispatch)=>{
    try {
       const token= localStorage.getItem('token')
       const res =  await axios.get(`${baseUrl}/user/currentuser`,{ headers:{ Authorization: `Bearer ${token}`}})
      dispatch(currentuser(res?.data))
    } catch (error) {
        dispatch(geterror(error?.response?.data?.msg))
    }
}

export  const LoginUser=async(data,navigate,dispatch)=>{
    try {
       const res =  await axios.post(`${baseUrl}/user/login`,data)
        localStorage.setItem('token',res?.data?.token)
        GetCurrentUser(dispatch)
        navigate('/dashboard')
        dispatch(geterror(null))
    } catch (error) {
        dispatch(geterror(error?.response?.data?.msg))
    }
}
