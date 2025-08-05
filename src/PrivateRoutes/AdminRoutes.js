import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AdminRoutes({children}) {
    const token=localStorage.getItem('token')
    const user=useSelector(state=>state.user.user)
  return (
    <>{token && user?.Role==='admin' ? children:<Navigate to={'/'} /> }</>
  )
}

export default AdminRoutes