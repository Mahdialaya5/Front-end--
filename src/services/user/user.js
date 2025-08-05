import axios from "axios"
import { baseUrl } from "../baseURL"
import { geterror } from "../../redux/user"

export  const RegisterUser=async(data,navigate,dispatch)=>{
    try {
          await axios.post(`${baseUrl}/user/register`,data)
          navigate('/login')
         dispatch(geterror(null))
    } catch (error) {
        dispatch(geterror(error.response.data.msg))
    }
}