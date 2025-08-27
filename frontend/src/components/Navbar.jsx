// // // import React, { useState } from "react";
// // // import { assets } from "../assets/assets";
// // // import { Link } from "react-router-dom";

// // // const Navbar = () => {
// // //   const [visible, setVisible] = useState(false);

// // //   return (
// // //     <>
// // //       <div className="navbar w-full px-4 lg:px-20 py-2 shadow-md  text-white">
// // //         {/* Top Bar */}
// // //         <div className="flex items-center justify-between font-medium">
// // //           {/* Logo */}
// // //           <img src={assets.logo} alt="Logo" className="h-12 w-auto" />

// // //           {/* Desktop Menu */}
// // //           <ul className="hidden md:flex gap-6 text-sm items-center">
// // //             <li className="hover:text-gray-300 transition">
// // //               <Link to="/">Home</Link>
// // //             </li>
// // //             <li className="hover:text-gray-300 transition">
// // //               <Link to="/about">About</Link>
// // //             </li>
// // //             <li className="hover:text-gray-300 transition">
// // //               <Link to="/vegtables">Vegetables</Link>
// // //             </li>
// // //             <li className="hover:text-gray-300 transition">
// // //               <Link to="/cantactus">Contact</Link>
// // //             </li>
// // //             <Link to={"/login"}>
// // //             <li>
// // //               <img
// // //                 src={assets.profile_icon}
// // //                 alt="Profile"
// // //                 className="w-6 h-auto cursor-pointer"
// // //               />
// // //             </li>
// // //             </Link>
// // //           </ul>

// // //           {/* Mobile Icons */}
// // //           <div className="flex items-center gap-4 md:hidden">
// // //            <Link to={"/login"}>
// // //             <img
// // //               src={assets.profile_icon}
// // //               className="w-7 h-auto"
// // //               alt="Profile"
// // //             />
// // //            </Link>
// // //             <img
// // //               className="w-7 h-auto cursor-pointer"
// // //               src={assets.menu_icon}
// // //               alt="Menu"
// // //               onClick={() => setVisible(!visible)}
// // //             />
// // //           </div>
// // //         </div>

// // //         {/* Mobile Menu */}
// // //       </div>
// // //       {visible && (
// // //         <ul className="navbar flex flex-row gap-4 text-sm md:hidden px-4 py-3">
// // //           <Link to={"/"}>
// // //             <li className=" hover:bg-white hover:text-green-600  px-3 py-2 transition">Home</li>
// // //           </Link>
// // //           <Link to="/about" onClick={() => setVisible(false)}>
// // //             <li className="hover:bg-white hover:text-green-600  px-3 py-2 transition">
// // //               About
// // //             </li>
// // //           </Link>
// // //           <Link to="/vegtables" onClick={() => setVisible(false)}>
// // //             <li className="hover:bg-white hover:text-green-600  px-3 py-2 transition">
// // //               Vegtables
// // //             </li>
// // //           </Link>
// // //           <Link to="/cantactus" onClick={() => setVisible(false)}>
// // //             <li className="hover:bg-white hover:text-green-600  px-3 py-2 transition">
// // //               Contact
// // //             </li>
// // //           </Link>
// // //         </ul>
// // //       )}
// // //     </>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useState, useContext } from "react";
// // import { assets } from "../assets/assets";
// // import { Link, useNavigate } from "react-router-dom";
// // import { ShopContext } from "../context/shopContext";

// // const Navbar = () => {
// //   const [visible, setVisible] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const { token, setToken } = useContext(ShopContext);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     setToken("");
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <>
// //       <div className="navbar w-full px-4  lg:px-20 py-4 shadow-lg text-white sticky top-0 z-50">
// //         {/* Top Bar */}
// //         <div className="flex items-center justify-between font-medium">
// //           {/* Logo */}
// //           <Link to={"/"}>
// //           <img src={assets.logo} alt="Logo" className="h-14 w-auto" />
// //           </Link>

// //           {/* Desktop Menu */}
// //           <ul className="hidden md:flex gap-6 text-sm items-center">
// //             <li className="hover:text-gray-300 transition text-lg">
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li className="hover:text-gray-300 transition text-lg">
// //               <Link to="/about">About</Link>
// //             </li>
// //             <li className="hover:text-gray-300 transition text-lg">
// //               <Link to="/vegetables">Vegetables</Link>
// //             </li>
// //             <li className="hover:text-gray-300 transition text-lg">
// //               <Link to="/cantactus">Contact</Link>
// //             </li>

// //             <li>
// //               <div className="relative">
// //               <div className="absolute top-1 left-4">
// //               <p className="text-xs text-center w-4 h-4 bg-red-500 border-none border rounded-3xl">0</p>
// //               </div>
// //               <Link to="/cart"><img className="h-7 cursor-pointer w-auto" src={assets.cart_img} alt="" /></Link>
// //               </div>
// //             </li>

// //             {/* Profile Icon + Dropdown */}
// //             <li
// //               className="relative"
// //               onMouseEnter={() => {
// //                 clearTimeout(window.dropdownTimeout); // Prevent hiding if hovered again
// //                 setDropdownOpen(true);
// //               }}
// //               onMouseLeave={() => {
// //                 // Set timeout to close dropdown after 3 seconds
// //                 window.dropdownTimeout = setTimeout(() => {
// //                   setDropdownOpen(false);
// //                 }, 500);
// //               }}
// //             >
// //               {token ? (
// //                 <div className="cursor-pointer">
// //                   <img
// //                     src={assets.profile_icon}
// //                     alt="Profile"
// //                     className="w-6 h-auto"
// //                   />

// //                   {dropdownOpen && (
// //                     <div className="absolute right-0 mt-2 bg-white text-black shadow-md z-50">
// //                       <button
// //                         onClick={handleLogout}
// //                         className="px-4 py-2 text-sm hover:bg-green-400 hover:text-white w-full text-left"
// //                       >
// //                         Logout
// //                       </button>
// //                     </div>
// //                   )}
// //                 </div>
// //               ) : (
// //                 <Link to="/login">
// //                   <img
// //                     src={assets.profile_icon}
// //                     alt="Profile"
// //                     className="w-20 h-auto cursor-pointer"
// //                   />
// //                 </Link>
// //               )}
// //             </li>
// //           </ul>

// //           {/* Mobile Icons */}
// //           <div className="flex items-center gap-4 md:hidden">
// //             <Link to="/login">
// //               <img
// //                 src={assets.profile_icon}
// //                 className="w-7 h-auto"
// //                 alt="Profile"
// //               />
// //             </Link>
// //             <img
// //               className="w-7 h-auto cursor-pointer"
// //               src={assets.menu_icon}
// //               alt="Menu"
// //               onClick={() => setVisible(!visible)}
// //             />
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       {visible && (
// //         <ul className="navbar flex flex-row gap-4 text-sm md:hidden px-4 py-3">
// //           <Link to="/" onClick={() => setVisible(false)}>
// //             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
// //               Home
// //             </li>
// //           </Link>
// //           <Link to="/about" onClick={() => setVisible(false)}>
// //             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
// //               About
// //             </li>
// //           </Link>
// //           <Link to="/vegetables" onClick={() => setVisible(false)}>
// //             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
// //               Vegetables
// //             </li>
// //           </Link>
// //           <Link to="/cantactus" onClick={() => setVisible(false)}>
// //             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
// //               Contact
// //             </li>
// //           </Link>
// //         </ul>
// //       )}
// //     </>
// //   );
// // };

// // export default Navbar;

// import React, { useState, useContext } from "react";
// import { assets } from "../assets/assets";
// import { Link, useNavigate } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";

// const Navbar = () => {
//   const [visible, setVisible] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const { token, setToken, cartCount } = useContext(ShopContext); // ✅ get cartCount
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     setToken("");
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <>
//       <div className="navbar w-full px-4 lg:px-20 py-4 shadow-lg text-white sticky top-0 z-50 bg-green-600">
//         {/* Top Bar */}
//         <div className="flex items-center justify-between font-medium">
//           {/* Logo */}
//           <Link to={"/"}>
//             <img src={assets.logo} alt="Logo" className="h-14 w-auto" />
//           </Link>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex gap-6 text-sm items-center">
//             <li className="hover:text-gray-300 transition text-lg">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="hover:text-gray-300 transition text-lg">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="hover:text-gray-300 transition text-lg">
//               <Link to="/vegetables">Vegetables</Link>
//             </li>
//             <li className="hover:text-gray-300 transition text-lg">
//               <Link to="/cantactus">Contact</Link>
//             </li>

//             {/* 🛒 Cart Icon */}
//             <li>
//               <div className="relative">
//                 {/* Dynamic cart count */}
//                 {cartCount > 0 && (
//                   <div className="absolute -top-2 -right-2">
//                     <p className="text-xs text-center w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center">
//                       {cartCount}
//                     </p>
//                   </div>
//                 )}
//                 <Link to="/cart">
//                   <img
//                     className="h-7 cursor-pointer w-auto"
//                     src={assets.cart_img}
//                     alt="Cart"
//                   />
//                 </Link>
//               </div>
//             </li>

//             {/* Profile Icon + Dropdown */}
//             <li
//               className="relative"
//               onMouseEnter={() => {
//                 clearTimeout(window.dropdownTimeout);
//                 setDropdownOpen(true);
//               }}
//               onMouseLeave={() => {
//                 window.dropdownTimeout = setTimeout(() => {
//                   setDropdownOpen(false);
//                 }, 500);
//               }}
//             >
//               {token ? (
//                 <div className="cursor-pointer">
//                   <img
//                     src={assets.profile_icon}
//                     alt="Profile"
//                     className="w-6 h-auto"
//                   />

//                   {dropdownOpen && (
//                     <div className="absolute right-0 mt-2 bg-white text-black shadow-md z-50">
//                       <button
//                         onClick={handleLogout}
//                         className="px-4 py-2 text-sm hover:bg-green-400 hover:text-white w-full text-left"
//                       >
//                         Logout
//                       </button>
//                       <Link to="/profile">
//                         <button className="px-4 py-2 text-sm hover:bg-green-400 hover:text-white w-full text-left">
//                           Profile
//                         </button>
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               ) : (
//                 <Link to="/login">
//                   <img
//                     src={assets.profile_icon}
//                     alt="Profile"
//                     className="w-20 h-auto cursor-pointer"
//                   />
//                 </Link>
//               )}
//             </li>
//           </ul>

//           {/* Mobile Icons */}
//           <div className="flex items-center gap-4 md:hidden">
//             <Link to="/cart">
//               <div className="relative">
//                 {cartCount > 0 && (
//                   <div className="absolute -top-2 -right-2">
//                     <p className="text-xs text-center w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center">
//                       {cartCount}
//                     </p>
//                   </div>
//                 )}
//                 <img
//                   className="w-7 h-auto cursor-pointer"
//                   src={assets.cart_img}
//                   alt="Cart"
//                 />
//               </div>
//             </Link>
//             <Link to="/login">
//               <img
//                 src={assets.profile_icon}
//                 className="w-7 h-auto"
//                 alt="Profile"
//               />
//             </Link>
//             <img
//               className="w-7 h-auto cursor-pointer"
//               src={assets.menu_icon}
//               alt="Menu"
//               onClick={() => setVisible(!visible)}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {visible && (
//         <ul className="navbar flex flex-row gap-4 text-sm md:hidden px-4 py-3">
//           <Link to="/" onClick={() => setVisible(false)}>
//             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
//               Home
//             </li>
//           </Link>
//           <Link to="/about" onClick={() => setVisible(false)}>
//             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
//               About
//             </li>
//           </Link>
//           <Link to="/vegetables" onClick={() => setVisible(false)}>
//             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
//               Vegetables
//             </li>
//           </Link>
//           <Link to="/cantactus" onClick={() => setVisible(false)}>
//             <li className="hover:bg-white hover:text-green-600 px-3 py-2 transition">
//               Contact
//             </li>
//           </Link>
//         </ul>
//       )}
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { token, setToken, cartCount } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleRedirectIfLoggedOut = (e, path) => {
    if (!token) {
      e.preventDefault(); // prevent navigation
      navigate("/login"); // redirect to login
    }
  };

  return (
    <>
      <div className="navbar w-full px-4 lg:px-20 py-4 shadow-lg text-white sticky top-0 z-50 bg-green-600">
        <div className="flex items-center justify-between font-medium">
          {/* Logo */}
          <Link to="/">
            <img src={assets.logo} alt="Logo" className="h-14 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-sm items-center">
            <li className="hover:text-gray-300 transition text-lg">
              <Link
                to="/"
                onClick={(e) => handleRedirectIfLoggedOut(e, "/")}
              >
                Home
              </Link>
            </li>
            <li className="hover:text-gray-300 transition text-lg">
              <Link
                to="/about"
                onClick={(e) => handleRedirectIfLoggedOut(e, "/about")}
              >
                About
              </Link>
            </li>
            <li className="hover:text-gray-300 transition text-lg">
              <Link
                to="/vegetables"
                onClick={(e) => handleRedirectIfLoggedOut(e, "/vegetables")}
              >
                Vegetables
              </Link>
            </li>
            <li className="hover:text-gray-300 transition text-lg">
              <Link
                to="/cantactus"
                onClick={(e) => handleRedirectIfLoggedOut(e, "/cantactus")}
              >
                Contact
              </Link>
            </li>

            {/* Cart Icon */}
            <li>
              <div className="relative">
                {cartCount > 0 && token && (
                  <div className="absolute -top-2 -right-2">
                    <p className="text-xs text-center w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center">
                      {cartCount}
                    </p>
                  </div>
                )}
                <Link
                  to="/cart"
                  onClick={(e) => handleRedirectIfLoggedOut(e, "/cart")}
                >
                  <img
                    className="h-7 w-auto cursor-pointer"
                    src={assets.cart_img}
                    alt="Cart"
                  />
                </Link>
              </div>
            </li>

            {/* Profile Icon + Dropdown */}
            <li
              className="relative"
              onMouseEnter={() => {
                clearTimeout(window.dropdownTimeout);
                setDropdownOpen(true);
              }}
              onMouseLeave={() => {
                window.dropdownTimeout = setTimeout(() => {
                  setDropdownOpen(false);
                }, 300);
              }}
            >
              {token ? (
                <div className="cursor-pointer">
                  <img
                    src={assets.profile_icon}
                    alt="Profile"
                    className="w-7 h-7 rounded-full"
                  />
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white text-black shadow-md z-50 rounded-lg overflow-hidden min-w-[120px]">
                      <Link to="/profile">
                        <button className="px-4 py-2 text-sm hover:bg-green-400 hover:text-white w-full text-left">
                          Profile
                        </button>
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="px-4 py-2 text-sm hover:bg-green-400 hover:text-white w-full text-left"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <img
                    src={assets.profile_icon}
                    alt="Profile"
                    className="w-7 h-7 rounded-full cursor-pointer"
                  />
                </Link>
              )}
            </li>
          </ul>

          {/* Mobile Icons */}
          <div className="flex items-center gap-4 md:hidden">
            <Link
              to="/cart"
              onClick={(e) => handleRedirectIfLoggedOut(e, "/cart")}
            >
              <div className="relative">
                {cartCount > 0 && token && (
                  <div className="absolute -top-2 -right-2">
                    <p className="text-xs text-center w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center">
                      {cartCount}
                    </p>
                  </div>
                )}
                <img
                  className="w-7 h-7 cursor-pointer"
                  src={assets.cart_img}
                  alt="Cart"
                />
              </div>
            </Link>

            <Link
              to="/profile"
              onClick={(e) => handleRedirectIfLoggedOut(e, "/profile")}
            >
              <img
                src={assets.profile_icon}
                className="w-7 h-7 rounded-full"
                alt="Profile"
              />
            </Link>

            <img
              className="w-7 h-7 cursor-pointer"
              src={assets.menu_icon}
              alt="Menu"
              onClick={() => setVisible(!visible)}
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {visible && (
        <ul className="navbar flex flex-col gap-2 text-sm md:hidden px-4 py-3 bg-green-600 text-white">
          <Link to="/" onClick={(e) => handleRedirectIfLoggedOut(e, "/")}>
            <li className="hover:bg-white hover:text-green-600 px-3 py-2 rounded transition">
              Home
            </li>
          </Link>
          <Link
            to="/about"
            onClick={(e) => handleRedirectIfLoggedOut(e, "/about")}
          >
            <li className="hover:bg-white hover:text-green-600 px-3 py-2 rounded transition">
              About
            </li>
          </Link>
          <Link
            to="/vegetables"
            onClick={(e) => handleRedirectIfLoggedOut(e, "/vegetables")}
          >
            <li className="hover:bg-white hover:text-green-600 px-3 py-2 rounded transition">
              Vegetables
            </li>
          </Link>
          <Link
            to="/cantactus"
            onClick={(e) => handleRedirectIfLoggedOut(e, "/cantactus")}
          >
            <li className="hover:bg-white hover:text-green-600 px-3 py-2 rounded transition">
              Contact
            </li>
          </Link>
        </ul>
      )}
    </>
  );
};

export default Navbar;
