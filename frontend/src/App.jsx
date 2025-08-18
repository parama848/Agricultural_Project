import React from 'react'
import Home from './pages/Home'
import {Routes,Route, Router} from 'react-router-dom'
import ContactUs from './pages/ContactUs'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
// import Vegetables from './pages/Vegetables'
import Vegetables from './pages/Vegetables'
import Cart from './components/Cart'



export const backendUrl = "http://localhost:4000";

// import { agriProducts, assets } from './assets/assets'

const App = () => {
  return (
    <>
    <Navbar />
    <div className='px-4 sm:px-[2vm] md:px-[5vm] lg:px-[7vw]'>
     <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/vegtables' element={<Vegetables />} /> */}
      <Route path='/vegetables' element={<Vegetables />} />
      <Route path='/cantactus' element={<ContactUs />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} /> 
      <Route path='/cart' element={<Cart />} />
     </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App

// // src/App.jsx
// import React, { useContext, useEffect } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Vegetables from "./pages/Vegetables";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Navbar from "./components/Navbar";
// import { ShopContext } from "./context/shopContext";
// import Footer from "./components/Footer";

// const App = () => {
//   const { token, setToken } = useContext(ShopContext);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (!token && storedToken) {
//       setToken(storedToken);
//     }
//   }, [token]);

//   return (
//     <>
//       <Navbar />
//       <div className="px-4 sm:px-[2vm] md:px-[5vm lg:px-[7vw]">
//       <Routes>
//         <Route path="/login" element={<Login />} />

//         {/* ✅ Protected Routes */}
//         {token ? (
//           <>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/vegtables" element={<Vegetables />} />
//             <Route path="/cantactus" element={<ContactUs />} />
//           </>
//         ) : (
//           <>
//             <Route path="*" element={<Navigate to="/login" replace />} />
//           </>
//         )}
//       </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;
