import React, { useState } from 'react'
import NavBar from '../../components/Navbar/NavBar'
import { addproduct } from '../../services/product/product'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function AddProduct() {
    const [data, setdata] = useState({
         Name:'',
         Price:'',
         Qunatity:'',
         Image:null
    })
    const navigate=useNavigate()
    const dispatch=useDispatch()
        const HandleSubmit=(e)=>{
        e.preventDefault()
        const DataForm= new FormData()
        DataForm.append("Name",data.Name)
        DataForm.append("Price",data.Price)
        DataForm.append("Quantity",data.Qunatity)
        DataForm.append('file',data.Image)
        
        addproduct(DataForm,navigate,dispatch)
    }
  return (
    <div>
        <NavBar/>
        <form  className='register_form' onSubmit={HandleSubmit} >
            <p>Add product</p>
            <input placeholder='Name' onChange={(e)=>setdata({...data,Name:e.target.value})}/>
            <input placeholder='Price' onChange={(e)=>setdata({...data,Price:e.target.value})} />
            <input placeholder='Quantity'  onChange={(e)=>setdata({...data,Qunatity:e.target.value})}/>
            <input type='file'   onChange={(e)=>setdata({...data,Image:e.target.files[0]})}/>
            <button>Save</button>
        </form>
    </div>
  )
}

export default AddProduct