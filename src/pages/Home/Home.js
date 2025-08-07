import React, { useEffect } from 'react'
import NavBar from '../../components/Navbar/NavBar'
import './Home.css'
import { Deleteproduct, SendOrder, getproduct } from '../../services/product/product'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    const dispatch=useDispatch()
    useEffect(() => {
        getproduct(dispatch)
    }, [dispatch])
    const products=useSelector(state=>state.product.products)
    const user=useSelector(state=>state.user.user)
  return (
    <>
<NavBar/>
<div className='cards' >
  {products?.map((el)=>el.Quantity>0 ? <div  className='card' >
        <img  src={el.Image} alt='product' />
       <div>
         <h3>{el.Name}</h3>
        <p>Price : {el.Price} TND</p>
           
   { user.Role==='client' ? <button  onClick={()=>SendOrder(el._id,dispatch)} >Buy</button>:null}
       { user.Role==='admin' ? <button  onClick={()=>Deleteproduct(el._id,dispatch)} >X</button>:null}
        </div>
    </div>:null)  }
    
</div>
    </>
  )
}

export default Home