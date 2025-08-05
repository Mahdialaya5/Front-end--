import React, { useState } from 'react'
import NavBar from '../../components/Navbar/NavBar'
import { addproduct } from '../../services/product/product'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function AddProduct() {
    const [data, setdata] = useState({
         Name:'',
         Price:'',
         Qunatity:''
    })
    const navigate=useNavigate()
    const dispatch=useDispatch()
        const HandleSubmit=(e)=>{
        e.preventDefault()
        addproduct(data,navigate,dispatch)
    }
  return (
    <div>
        <NavBar/>
        <form  className='register_form' onSubmit={HandleSubmit} >
            <p>Add product</p>
            <input placeholder='Name' onChange={(e)=>setdata({...data,Name:e.target.value})}/>
            <input placeholder='Price' onChange={(e)=>setdata({...data,Price:e.target.value})} />
            <input placeholder='Quantity'  onChange={(e)=>setdata({...data,Qunatity:e.target.value})}/>
            <input type='file' />
            <button>Save</button>
        </form>
    </div>
  )
}

export default AddProduct