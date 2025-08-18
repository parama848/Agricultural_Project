// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { backendUrl } from "../App";
// // import { toast } from "react-toastify";

// // // ✅ Helper to convert binary image buffer to base64 string
// // const bufferToBase64 = (buffer) => {
// //   let binary = "";
// //   const bytes = new Uint8Array(buffer);
// //   const len = bytes.length;
// //   for (let i = 0; i < len; i++) {
// //     binary += String.fromCharCode(bytes[i]);
// //   }
// //   return window.btoa(binary);
// // };

// // const List = ({ token }) => {
// //   const [products, setProducts] = useState([]);

// //   const fetchList = async () => {
// //     try {
// //       const res = await axios.get(`${backendUrl}/api/products/all`);
// //       setProducts(res.data.data); // Assuming backend sends { success: true, data: [...] }
// //     } catch (error) {
// //       console.error(error);
// //       toast.error("Failed to fetch product list");
// //     }
// //   };

// //   useEffect(() => {
// //     fetchList();
// //   }, []);

// //   return (
// //     <div className="ml-20">
// //       <h2 className="text-2xl font-semibold mb-4">All Products</h2>
// //       <div className="grid grid-cols-1 lg:grid-cols-3 ml-4 gap-6">
// //         {products.map((product) => (
// //           <div key={product._id} className="border p-1 rounded shadow-md">
// //             {product.image?.data ? (
// //               <img
// //                 src={`data:${product.image.contentType};base64,${bufferToBase64(
// //                   product.image.data.data
// //                 )}`}
// //                 alt={product.name}
// //                 className="w-full h-[150px] object-cover mb-2 p-2 rounded"
// //               />
// //             ) : (
// //               <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
// //                 No Image
// //               </div>
// //             )}
// //             <div className="p-2">
// //               <h3 className="text-sm text-gray-900 font-semibold">
// //                 {product.name}
// //               </h3>
// //               {/* <p className="text-sm text-gray-500"> {product.category}</p> */}
// //               <p className="text-gray-600 text-xs">{product.description}</p>
// //               <div className="flex justify-between mt-1">
// //                 <p className=" font-medium">₹ {product.pricePerKg} / kg</p>
// //                 <p className="text-sm text-green-500">
// //                   Available: {product.availableQuantityKg} kg
// //                 </p>

// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default List;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { backendUrl } from "../App";
// import { toast } from "react-toastify";

// // ✅ Helper to convert binary image buffer to base64 string
// const bufferToBase64 = (buffer) => {
//   let binary = "";
//   const bytes = new Uint8Array(buffer);
//   const len = bytes.length;
//   for (let i = 0; i < len; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// };

// const List = ({ token }) => {
//   const [products, setProducts] = useState([]);

//   // ✅ Fetch all products
//   const fetchList = async () => {
//     try {
//       const res = await axios.get(`${backendUrl}/api/products/all`);
//       setProducts(res.data.data);
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to fetch product list");
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   // ✅ Delete a product
//   const deleteProduct = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this product?")) return;

//     try {
//       await axios.delete(`${backendUrl}/api/products/delete/${id}`);
//       toast.success("Product deleted successfully");
//       fetchList(); // refresh list
//     } catch (error) {
//       console.error(error);
//       toast.error("Error deleting product");
//     }
//   };

//   return (
//     <div className="ml-20">
//       <h2 className="text-2xl font-semibold mb-4">All Products</h2>
//       <div className="grid grid-cols-1 lg:grid-cols-3 ml-4 gap-6">
//         {products.map((product) => (
//           <div key={product._id} className="border p-1 rounded shadow-md">
//             {product.image?.data ? (
//               <img
//                 src={`data:${product.image.contentType};base64,${bufferToBase64(
//                   product.image.data.data
//                 )}`}
//                 alt={product.name}
//                 className="w-full h-[150px] object-cover mb-2 p-2 rounded"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
//                 No Image
//               </div>
//             )}
//             <div className="p-2">
//               <h3 className="text-sm text-gray-900 font-semibold">
//                 {product.name}
//               </h3>
//               <p className="text-gray-600 text-xs">{product.description}</p>
//               <div className="flex justify-between mt-1">
//                 <p className="font-medium">₹ {product.pricePerKg} / kg</p>
//                 <p className="text-sm text-green-500">
//                   Available: {product.availableQuantityKg} kg
//                 </p>
//               </div>

//               {/* ✅ Delete Button */}
//               <div className="mt-2 flex justify-end">
//                 <button
//                   onClick={() => deleteProduct(product._id)}
//                   className="text-red-500 text-sm "
//                 >
//                  Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default List;


import React, { useEffect,useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import Add from "./Add"; 

//  Helper to convert image buffer to base64
const bufferToBase64 = (buffer) => {

  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};



const List = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [editProduct, setEditProduct] = useState(null); // ⭐ Track selected product for update

  //  Fetch all products
  const fetchList = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/products/all`);
      setProducts(res.data.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch product list");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  //  Delete a product
  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`${backendUrl}/api/products/delete/${id}`);
      toast.success("Product deleted successfully");
      fetchList(); // Refresh list
    } catch (error) {
      console.error(error);
      toast.error("Error deleting product");
    }
  };


  return (
    <div className="ml-20 relative ">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 ml-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-1 rounded shadow-md bg-green-200">
            {product.image?.data ? (
              <img
                src={`data:${product.image.contentType};base64,${bufferToBase64(
                  product.image.data.data
                )}`}
                alt={product.name}
                className="w-full h-[150px] object-cover mb-2 p-2 rounded"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}
            <div className="p-2 bg-green-200">
              <h3 className="text-sm text-gray-900 font-semibold">
                {product.name}
              </h3>
              <p className="text-gray-600 text-xs">{product.description}</p>
              <div className="flex justify-between mt-1">
                <p className="font-medium">₹ {product.pricePerKg} / kg</p>
                <p className="text-sm text-green-500">
                  Available: {product.availableQuantityKg} kg
                </p>
              </div>

              {/*  Buttons */}
              <div className="mt-2 flex justify-end gap-2">
                <button
                  onClick={() => setEditProduct(product)}
                  className=" text-xs hover:text-white border-gray-950 px-3 py-1.5 rounded-full bg-white hover:bg-green-500  "
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteProduct(product._id)}
                  className=" text-xs hover:text-white border-gray-950 px-3 py-1.5 rounded-full bg-white hover:bg-green-500 "
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/*  Show Edit Form (Popup) */}
      {editProduct && (
        <div className="fixed top-0 left-0 w-full h-full p-6 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg  w-[100%] max-w-xl relative shadow-lg">
            <button
              onClick={() => {
                setEditProduct(null);
                fetchList(); // Refresh list after edit
              }}
              className="absolute top-2 right-4 text-gray-600 text-xl"
            >
              &times;
            </button>
            <div>
          <Add token={token} editProduct={editProduct}  />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
