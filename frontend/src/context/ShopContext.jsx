// // // src/context/ShopContext.jsx
// // import React, { createContext, useEffect, useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // export const ShopContext = createContext();

// // const ShopContextProvider = ({ children }) => {
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// //   // for backend fetching products
// //   const [products, setProducts] = useState([]);

// //   const [token, setToken] = useState("");

// // //   useEffect(() => {
// // //     const storedToken = localStorage.getItem("token");
// // //     if (!token && storedToken) {
// // //       setToken(storedToken);
// // //     }
// // //   }, [token]);

// // //fetching products
// //  const getProductsData = async () => {
// //     try {
// //       const response = await axios.get(backendUrl + "/api/add/all");
// //       if (response.data.success) {
// //         setProducts(response.data.products);
// //       } else {
// //         toast.error(response.data.message);
// //       }
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message);
// //     }
// //   };



// // useEffect(() => {
// //   const storedToken = localStorage.getItem("token");
// //   if (storedToken) {
// //     setToken(storedToken);
// //   }
// // }, []);

// // //fetching products

// //  useEffect(() => {
// //     getProductsData();
// //   }, []);


// //   const contextValue = {
// //     token,
// //     setToken,
// //     backendUrl,
// //   };



// //   return (
// //     <ShopContext.Provider value={contextValue}>
// //       {children}
// //     </ShopContext.Provider>
// //   );
// // };

// // export default ShopContextProvider;

// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const ShopContext = createContext();



// const ShopContextProvider = ({ children }) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [products, setProducts] = useState([]);
//   const [token, setToken] = useState("");

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(backendUrl + "/api/products/all");
//       if (response.data.success) {
//         setProducts(response.data.data); // Make sure your backend returns `data`
//       } else {
//         toast.error(response.data.message || "Failed to fetch products");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error");
//     }
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   const contextValue = {
//     token,
//     setToken,
//     backendUrl,
//     products, // ✅ added
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;





// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

//   const [products, setProducts] = useState([]);
//   const [token, setToken] = useState("");

//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/products/all`);
//       if (response.data.success) {
//         setProducts(response.data.products); // ✅ Corrected here
//       } else {
//         toast.error(response.data.message || "Failed to fetch products");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error");
//     }
//   };

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) {
//       setToken(storedToken);
//     }
//   }, []);

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   const contextValue = {
//     token,
//     setToken,
//     backendUrl,
//     products,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;


import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");


  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/products/all");
      if (response.data.success) {
        setProducts(response.data.data); // ✅ Must match "data" key from backend
      } else {
        toast.error(response.data.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    }
  };

  // delete products
//   const deleteProductById = async (id) => {
//   try {
//     const res = await axios.delete(`${backendUrl}/api/products/delete/${id}`);
//     if (res.data.success) {
//       toast.success("Product deleted");
//       getProductsData(); // Refresh product list
//     } else {
//       toast.error(res.data.message);
//     }
//   } catch (err) {
//     console.error(err);
//     toast.error("Failed to delete product");
//   }
// };


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  useEffect(() => {
    getProductsData();
  }, []);

  const contextValue = {
    token,
    setToken,
    backendUrl,
    products,

    // deleteProductById,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
