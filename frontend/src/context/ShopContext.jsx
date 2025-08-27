// // // // // // src/context/ShopContext.jsx
// // // // // import React, { createContext, useEffect, useState } from "react";
// // // // // import axios from "axios";
// // // // // import { toast } from "react-toastify";

// // // // // export const ShopContext = createContext();

// // // // // const ShopContextProvider = ({ children }) => {
// // // // //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // // // //   // for backend fetching products
// // // // //   const [products, setProducts] = useState([]);

// // // // //   const [token, setToken] = useState("");

// // // // // //   useEffect(() => {
// // // // // //     const storedToken = localStorage.getItem("token");
// // // // // //     if (!token && storedToken) {
// // // // // //       setToken(storedToken);
// // // // // //     }
// // // // // //   }, [token]);

// // // // // //fetching products
// // // // //  const getProductsData = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(backendUrl + "/api/add/all");
// // // // //       if (response.data.success) {
// // // // //         setProducts(response.data.products);
// // // // //       } else {
// // // // //         toast.error(response.data.message);
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.log(error);
// // // // //       toast.error(error.message);
// // // // //     }
// // // // //   };



// // // // // useEffect(() => {
// // // // //   const storedToken = localStorage.getItem("token");
// // // // //   if (storedToken) {
// // // // //     setToken(storedToken);
// // // // //   }
// // // // // }, []);

// // // // // //fetching products

// // // // //  useEffect(() => {
// // // // //     getProductsData();
// // // // //   }, []);


// // // // //   const contextValue = {
// // // // //     token,
// // // // //     setToken,
// // // // //     backendUrl,
// // // // //   };



// // // // //   return (
// // // // //     <ShopContext.Provider value={contextValue}>
// // // // //       {children}
// // // // //     </ShopContext.Provider>
// // // // //   );
// // // // // };

// // // // // export default ShopContextProvider;

// // // // import React, { createContext, useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { toast } from "react-toastify";

// // // // export const ShopContext = createContext();



// // // // const ShopContextProvider = ({ children }) => {
// // // //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // // //   const [products, setProducts] = useState([]);
// // // //   const [token, setToken] = useState("");

// // // //   const getProductsData = async () => {
// // // //     try {
// // // //       const response = await axios.get(backendUrl + "/api/products/all");
// // // //       if (response.data.success) {
// // // //         setProducts(response.data.data); // Make sure your backend returns `data`
// // // //       } else {
// // // //         toast.error(response.data.message || "Failed to fetch products");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       toast.error("Server Error");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     const storedToken = localStorage.getItem("token");
// // // //     if (storedToken) {
// // // //       setToken(storedToken);
// // // //     }
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     getProductsData();
// // // //   }, []);

// // // //   const contextValue = {
// // // //     token,
// // // //     setToken,
// // // //     backendUrl,
// // // //     products, // ✅ added
// // // //   };

// // // //   return (
// // // //     <ShopContext.Provider value={contextValue}>
// // // //       {children}
// // // //     </ShopContext.Provider>
// // // //   );
// // // // };

// // // // export default ShopContextProvider;





// // // // import React, { createContext, useEffect, useState } from "react";
// // // // import axios from "axios";
// // // // import { toast } from "react-toastify";

// // // // export const ShopContext = createContext();

// // // // const ShopContextProvider = ({ children }) => {
// // // //   const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

// // // //   const [products, setProducts] = useState([]);
// // // //   const [token, setToken] = useState("");

// // // //   const getProductsData = async () => {
// // // //     try {
// // // //       const response = await axios.get(`${backendUrl}/api/products/all`);
// // // //       if (response.data.success) {
// // // //         setProducts(response.data.products); // ✅ Corrected here
// // // //       } else {
// // // //         toast.error(response.data.message || "Failed to fetch products");
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       toast.error("Server Error");
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     const storedToken = localStorage.getItem("token");
// // // //     if (storedToken) {
// // // //       setToken(storedToken);
// // // //     }
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     getProductsData();
// // // //   }, []);

// // // //   const contextValue = {
// // // //     token,
// // // //     setToken,
// // // //     backendUrl,
// // // //     products,
// // // //   };

// // // //   return (
// // // //     <ShopContext.Provider value={contextValue}>
// // // //       {children}
// // // //     </ShopContext.Provider>
// // // //   );
// // // // };

// // // // export default ShopContextProvider;


// // // import React, { createContext, useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";


// // // export const ShopContext = createContext();

// // // const ShopContextProvider = ({ children }) => {
// // //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// // //   const [products, setProducts] = useState([]);
// // //   const [token, setToken] = useState("");


// // //   const getProductsData = async () => {
// // //     try {
// // //       const response = await axios.get(backendUrl + "/api/products/all");
// // //       if (response.data.success) {
// // //         setProducts(response.data.data); // ✅ Must match "data" key from backend
// // //       } else {
// // //         toast.error(response.data.message || "Failed to fetch products");
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //       toast.error("Server Error");
// // //     }
// // //   };

// // //   // delete products
// // // //   const deleteProductById = async (id) => {
// // // //   try {
// // // //     const res = await axios.delete(`${backendUrl}/api/products/delete/${id}`);
// // // //     if (res.data.success) {
// // // //       toast.success("Product deleted");
// // // //       getProductsData(); // Refresh product list
// // // //     } else {
// // // //       toast.error(res.data.message);
// // // //     }
// // // //   } catch (err) {
// // // //     console.error(err);
// // // //     toast.error("Failed to delete product");
// // // //   }
// // // // };


// // //   useEffect(() => {
// // //     const storedToken = localStorage.getItem("token");
// // //     if (storedToken) {
// // //       setToken(storedToken);
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     getProductsData();
// // //   }, []);

// // //   const contextValue = {
// // //     token,
// // //     setToken,
// // //     backendUrl,
// // //     products,

// // //     // deleteProductById,
// // //   };

// // //   return (
// // //     <ShopContext.Provider value={contextValue}>
// // //       {children}
// // //     </ShopContext.Provider>
// // //   );
// // // };

// // // export default ShopContextProvider;
// // import React, { createContext, useEffect, useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // export const ShopContext = createContext();

// // const ShopContextProvider = ({ children }) => {
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL;

// //   const [products, setProducts] = useState([]);
// //   const [token, setToken] = useState("");

// //   // 🛒 Cart state
// //   const [cartCount, setCartCount] = useState(0);
// //   const [cartItems, setCartItems] = useState({}); 
// //   // cartItems = { productId: quantity }

// //   // Fetch products
// //   const getProductsData = async () => {
// //     try {
// //       const response = await axios.get(backendUrl + "/api/products/all");
// //       if (response.data.success) {
// //         setProducts(response.data.data);
// //       } else {
// //         toast.error(response.data.message || "Failed to fetch products");
// //       }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Server Error");
// //     }
// //   };

// //   // 🛒 Add product to cart
// //   const addToCart = (productId) => {
// //     setCartItems((prev) => {
// //       const newCart = { ...prev };
// //       if (newCart[productId]) {
// //         newCart[productId] += 1;
// //       } else {
// //         newCart[productId] = 1;
// //       }
// //       return newCart;
// //     });

// //     setCartCount((prev) => prev + 1); // increase cart count
// //   };

// //   // 🛒 Remove product from cart (optional)
// //   const removeFromCart = (productId) => {
// //     setCartItems((prev) => {
// //       if (!prev[productId]) return prev;
// //       const newCart = { ...prev };
// //       if (newCart[productId] > 1) {
// //         newCart[productId] -= 1;
// //       } else {
// //         delete newCart[productId];
// //       }
// //       return newCart;
// //     });

// //     setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
// //   };

// //   // Load token once
// //   useEffect(() => {
// //     const storedToken = localStorage.getItem("token");
// //     if (storedToken) {
// //       setToken(storedToken);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     getProductsData();
// //   }, []);

// //   const contextValue = {
// //     token,
// //     setToken,
// //     backendUrl,
// //     products,

// //     // 🛒 Cart values
// //     cartCount,
// //     cartItems,
// //     addToCart,
// //     removeFromCart,
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

//   // 🛒 Cart state
//   const [cartCount, setCartCount] = useState(0);
//   const [cartItems, setCartItems] = useState({});
//   // cartItems = { productId: quantity }

//   // ✅ Load cart from localStorage when app starts
//   useEffect(() => {
//     const savedCart = localStorage.getItem("cartItems");
//     const savedCount = localStorage.getItem("cartCount");
//     if (savedCart) setCartItems(JSON.parse(savedCart));
//     if (savedCount) setCartCount(JSON.parse(savedCount));
//   }, []);

//   // ✅ Save cart to localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     localStorage.setItem("cartCount", JSON.stringify(cartCount));
//   }, [cartItems, cartCount]);

//   // Fetch products
//   const getProductsData = async () => {
//     try {
//       const response = await axios.get(backendUrl + "/api/products/all");
//       if (response.data.success) {
//         setProducts(response.data.data);
//       } else {
//         toast.error(response.data.message || "Failed to fetch products");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Server Error");
//     }
//   };

//   // 🛒 Add product to cart
//   const addToCart = (productId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev };
//       if (newCart[productId]) {
//         newCart[productId] += 1;
//       } else {
//         newCart[productId] = 1;
//       }
//       return newCart;
//     });
//     setCartCount((prev) => prev + 1);
//   };

//   // 🛒 Remove product from cart
//   const removeFromCart = (productId) => {
//     setCartItems((prev) => {
//       if (!prev[productId]) return prev;
//       const newCart = { ...prev };
//       if (newCart[productId] > 1) {
//         newCart[productId] -= 1;
//       } else {
//         delete newCart[productId];
//       }
//       return newCart;
//     });
//     setCartCount((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   // Load token once
//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (storedToken) setToken(storedToken);
//   }, []);

//   useEffect(() => {
//     getProductsData();
//   }, []);

//   const contextValue = {
//     token,
//     setToken,
//     backendUrl,
//     products,

//     // 🛒 Cart values
//     cartCount,
//     cartItems,
//     addToCart,
//     removeFromCart,
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

  // 🛒 Cart state
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState({}); // { productId: quantity }

  // ✅ Load cart from localStorage when app starts
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    const savedCount = localStorage.getItem("cartCount");
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedCount) setCartCount(JSON.parse(savedCount));
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cartItems, cartCount]);

  // Fetch products
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/products/all");
      if (response.data.success) {
        setProducts(response.data.data);
      } else {
        toast.error(response.data.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
      toast.error("Server Error");
    }
  };

  // 🛒 Add product to cart
  const addToCart = (productId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]) newCart[productId] += 1;
      else newCart[productId] = 1;
      return newCart;
    });
    setCartCount((prev) => prev + 1);
  };

  // 🛒 Remove product from cart completely
  const removeFromCart = (productId) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (newCart[productId]) {
        delete newCart[productId];
      }
      return newCart;
    });

    setCartCount((prev) => {
      const qty = cartItems[productId] || 0;
      return prev - qty >= 0 ? prev - qty : 0;
    });
  };

  // 🛒 Update quantity directly
  const updateCartItemQty = (productId, qty) => {
    setCartItems((prev) => {
      const newCart = { ...prev };
      if (qty <= 0) {
        delete newCart[productId];
      } else {
        newCart[productId] = qty;
      }
      return newCart;
    });

    // recalc total cartCount
    setCartCount((prev) => {
      const totalQty = Object.values({ ...cartItems, [productId]: qty }).reduce(
        (sum, val) => sum + (val || 0),
        0
      );
      return totalQty;
    });
  };

  // Load token once
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) setToken(storedToken);
  }, []);

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <ShopContext.Provider
      value={{
        token,
        setToken,
        backendUrl,
        products,
        cartCount,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQty,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
