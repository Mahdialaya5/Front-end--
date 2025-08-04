import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

function App() {
  return (
    <Routes>
     <Route  element={<Home/>}  path='/'/>
     <Route  element={<Register/>}  path='/register'/>
     <Route  element={<Login/>}  path='/login'/>
    </Routes>
  );
}

export default App;
