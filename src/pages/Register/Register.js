import React, { useState } from 'react'
import NavBar from '../../components/Navbar/NavBar'
import './Register.css'
import { RegisterUser } from '../../services/user/user'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Register() {
    const [data, setdata] = useState({
      Name:"",
      email:"",
      Password:""
    })
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const HandleSubmit=(e)=>{
     e.preventDefault()
     RegisterUser(data,navigate,dispatch)
    }
    const error=useSelector(state=>state.user.error)
  return (
    <div>
        <NavBar/>
    <form className='register_form' onSubmit={HandleSubmit} >
        <h3>Register</h3>
        <input  placeholder='Name'   onChange={(e)=>setdata({...data,Name:e.target.value})}/>
        <input placeholder='email'  onChange={(e)=>setdata({...data,email:e.target.value})} />
        <input placeholder='password' type='password'  onChange={(e)=>setdata({...data,Password:e.target.value})} />
        {error!==null ?<p className='err' >{error}</p>:null}
        <button type='submit' >Submit</button>
    </form>

    </div>
  )
}

export default Register