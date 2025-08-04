import React from 'react'
import './NavBar.css'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate=useNavigate()
  return (
    <div  className='NavBar'>
        <button  className='btn_Nav' onClick={()=>navigate('/')}  >Home</button>
        <button   className='btn_Nav'  >Dashbaord</button>
        <button  className='btn_Nav'  onClick={()=>navigate('/login')}  >Login</button>
        <button  className='btn_Nav' onClick={()=>navigate('/register')} >Register</button>
    </div>
  )
}

export default NavBar