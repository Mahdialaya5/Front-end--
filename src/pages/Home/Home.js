import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import './Home.css'

function Home() {
  return (
    <>
<NavBar/>
<div className='cards' >
    <div  className='card' >
        <img  />
        <h3>Name</h3>
        <p>Price</p>
    </div>
    <div  className='card' >
        <img src='' alt='product' />
        <h3>Name</h3>
        <p>Price</p>
    </div>
    <div  className='card' >
        <img  />
        <h3>Name</h3>
        <p>Price</p>
    </div>
</div>
    </>
  )
}

export default Home