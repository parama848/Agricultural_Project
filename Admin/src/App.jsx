import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import {Routes,Route} from 'react-router-dom'
import Add from './Pages/Add'
import List from './Pages/List.jsx'; 
// import Orders from './Pages/Orders'
import { useState } from 'react'
import Login from './Components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import './index.css'
import Footer from './Components/Footer.jsx'


export const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const currency = '₹';
const App = () => {
  
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : "");

  useEffect(()=>{
     localStorage.setItem('token',token)
  },[token])


  return (
    
    <div className=' min-h-screen'>
      <ToastContainer />
      {token === ""
       ? <Login setToken={setToken}/>
      :
      <>
       <Navbar setToken={setToken}/>
     <hr />
     <div className='flex w-full'>
        <Sidebar />
        <div className='w-[70%] mx:auto ml-[masx(5vm,25px)] my-8 text-gray-600 text-base'>
         <Routes>
           <Route path='/add' element={<Add token={token}/>} />
           <Route path='/list' element={<List token={token} />} />
           {/* <Route path='/orders' element={<Orders token={token}/>} /> */}
         </Routes>
        </div>
     </div>
      </>
      }
      <Footer />
    </div>
  )
}
export default App;
