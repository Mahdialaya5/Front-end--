import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import './Register.css'

function Register() {
  return (
    <div>
        <NavBar/>

    <form className='register_form' >
        <h3>Register</h3>
        <input  placeholder='Name'/>
        <input placeholder='email'/>
        <input placeholder='password'/>
        <button>Submit</button>
    </form>

    </div>
  )
}

export default Register