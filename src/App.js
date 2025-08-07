import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import { GetCurrentUser } from './services/user/Auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import UserRoutes from './PrivateRoutes/UserRoutes';
import AddProduct from './pages/AddProduct/AddProduct';
import AdminRoutes from './PrivateRoutes/AdminRoutes';


function App() {
  const token=localStorage.getItem('token')
  const dispatch=useDispatch()
  useEffect(() => {
   if (token) {
    GetCurrentUser(dispatch)
   } 
  }, [token,dispatch])
  
  return (
    <Routes>
     <Route  element={<Home/>}  path='/'/>
     <Route  element={<Register/>}  path='/register'/>
     <Route  element={<Login/>}  path='/login'/>
     <Route  element={<UserRoutes><Dashboard/></UserRoutes>}  path='/dashboard'/>
     <Route  element={<AdminRoutes><AddProduct/></AdminRoutes>}  path='/addproduct'/>
    </Routes>
  );
}

export default App;
