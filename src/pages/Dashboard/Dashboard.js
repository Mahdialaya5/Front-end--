import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import { useSelector } from 'react-redux'

function Dashboard() {
    const user=useSelector(state=>state.user.user)
   
  return (
    <>
    <NavBar/>
    <h3>{user.Name}</h3>
    <h3>{user.email}</h3>

    </>
  )
}

export default Dashboard