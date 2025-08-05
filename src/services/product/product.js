import axios from "axios"
import { baseUrl } from "../baseURL"
import { geterror } from "../../redux/user"

export  const addproduct=async(data,navigate,dispatch)=>{
    try {
        const token=localStorage.getItem('token')
          await axios.post(`${baseUrl}/product/`,data,{ headers:{ Authorization: `Bearer ${token}`}})
     
    } catch (error) {
        dispatch(geterror(error.response.data.msg))
    }
}