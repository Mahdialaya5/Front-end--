import React from 'react'
import NavBar from '../../components/Navbar/NavBar'

function Login() {
  return (
    <div>
    <NavBar/>

<form className='register_form' >
    <h3>Login</h3>
    <input placeholder='email'/>
    <input placeholder='password'/>
    <button>login</button>
</form>
</div>
  )
}

export default Login