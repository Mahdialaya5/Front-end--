import axios from "axios"
import { baseUrl } from "../baseURL"
import { geterror } from "../../redux/user"
import { get } from "../../redux/product"


export  const getproduct=async(dispatch)=>{
    try {
     const res=  await axios.get(`${baseUrl}/product/`)
     dispatch(get(res?.data));
    } catch (error) {
        dispatch(geterror(error.response.data.msg))
    }
}

export  const addproduct=async(data,navigate,dispatch)=>{
    try {
        const token=localStorage.getItem('token')
          await axios.post(`${baseUrl}/product/`,data,{ headers:{ Authorization: `Bearer ${token}`}})
          getproduct(dispatch)
          navigate('/')
    } catch (error) {
        dispatch(geterror(error.response.data.msg))
    }
}

export  const Deleteproduct=async(id,dispatch)=>{
    try {
        const token=localStorage.getItem('token')
          await axios.delete(`${baseUrl}/product/${id}`,{ headers:{ Authorization: `Bearer ${token}`}})
          getproduct(dispatch)
    } catch (error) {
        console.log(error)
    }
}
export const SendOrder=async(id,dispatch)=>{
    try {
        const token=localStorage.getItem('token')
          await axios.patch(`${baseUrl}/product/${id}`,{},{ headers:{ Authorization: `Bearer ${token}`}})
          getproduct(dispatch)
    } catch (error) {
        console.log(error)
    }
}