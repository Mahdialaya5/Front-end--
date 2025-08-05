import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function NavBar() {
    const navigate=useNavigate()
    const Logout=()=>{
      localStorage.removeItem('token')
      navigate('/')
    }
    const token=localStorage.getItem('token')
    const user=useSelector(state=>state.user.user)
  return (
    <div  className='NavBar'>
        <button  className='btn_Nav' onClick={()=>navigate('/')}  >Home</button>
        {token&&user.Role==='admin'?<button   className='btn_Nav' onClick={()=>navigate('/addproduct')}  >Add product</button>:null}
       {!token  ?<> 
         <button  className='btn_Nav'  onClick={()=>navigate('/login')}  >Login</button>
        <button  className='btn_Nav' onClick={()=>navigate('/register')} >Register</button></>:
        <>
       <button   className='btn_Nav' onClick={()=>navigate('/dashboard')}  >Dashbaord</button>
       <button className='btn_Nav' onClick={()=>Logout()} >Logout</button></>}
        
    </div>
  )
}

export default NavBar