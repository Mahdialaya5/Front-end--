import React, { useState } from 'react'
import NavBar from '../../components/Navbar/NavBar'
import { LoginUser } from '../../services/user/Auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Login() {
  const [data, setdata] = useState({
    email:'',
    Password:''
  })
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const HandleSubmit=(e)=>{
    e.preventDefault()
    LoginUser(data,navigate,dispatch)
  }
  const error=useSelector(state=>state.user.error)
  return (
    <div>
    <NavBar/>
<form className='register_form' onSubmit={HandleSubmit} >
    <h3>Login</h3>
    <input placeholder='email' onChange={(e)=>setdata({...data,email:e.target.value})} />
    <input placeholder='password' type='password' onChange={(e)=>setdata({...data,Password:e.target.value})}   />
    {error!==null ?<p className='err' >{error}</p>:null}
    <button type='submit' >login</button>
</form>
</div>
  )
}

export default Login