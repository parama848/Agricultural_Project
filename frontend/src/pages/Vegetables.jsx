// // // // import React, { useState } from 'react';
// // // // import ProductCard from '../components/ProductCard';
// // // // import Title from '../components/Title';
// // // // import { useContext } from 'react';
// // // // import { ShopContext } from '../context/shopContext';

// // // // const VegetableList = () => {

// // // //  const { products } = useContext(ShopContext);

// // // //  console.log("Products from backend:", products);

// // // //   return (
// // // //  <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
// // // //      <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
// // // //         {products.map((product) => (
// // // //           <div key={product._id} className="border p-4 rounded shadow-md">

// // // //             {product.image?.data ? (
// // // //               <img
// // // //                 src={`data:${product.image.contentType};base64,${bufferToBase64(product.image.data.data)}`}
// // // //                 alt={product.name}
// // // //                 className="w-full h-48 object-cover mb-4 rounded"
// // // //               />
// // // //             ) : (
// // // //               <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
// // // //                 No Image
// // // //               </div>
// // // //             )}

// // // //             <h3 className="text-lg font-semibold">{product.name}</h3>
// // // //             <p className="text-gray-600">{product.description}</p>
// // // //             <p className="mt-2 font-medium">₹ {product.pricePerKg} / kg</p>
// // // //             <p className="text-sm text-gray-500">Category: {product.category}</p>
// // // //             <p className="text-sm text-gray-500">Available: {product.availableQuantityKg} kg</p>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //  </div>
// // // //   );
// // // // };

// // // // export default VegetableList;

// // import React, { useContext } from 'react';
// // import { ShopContext } from '../context/shopContext';

// // // ✅ Add this missing function
// // const bufferToBase64 = (buffer) => {
// //   let binary = '';
// //   const bytes = new Uint8Array(buffer);
// //   for (let i = 0; i < bytes.length; i++) {
// //     binary += String.fromCharCode(bytes[i]);
// //   }
// //   return window.btoa(binary);
// // };

// // const VegetableList = () => {
// //   const { products } = useContext(ShopContext);

// //   console.log("✅ Products from backend:", products);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-semibold mb-6">Vegetables</h2>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// //         {products.map((product) => (
// //           <div key={product._id} className="border p-4 rounded shadow-md">
// //             {product.image?.data ? (
// //               <img
// //                 src={`data:${product.image.contentType};base64,${bufferToBase64(product.image.data.data)}`}
// //                 alt={product.name}
// //                 className="w-full h-48 object-cover mb-4 rounded"
// //               />
// //             ) : (
// //               <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
// //                 No Image
// //               </div>
// //             )}

// //             <h3 className="text-lg font-semibold">{product.name}</h3>
// //             <p className="text-gray-600">{product.description}</p>
// //             <p className="mt-2 font-medium">₹ {product.pricePerKg} / kg</p>
// //             <p className="text-sm text-gray-500">Category: {product.category}</p>
// //             <p className="text-sm text-green-400">Available: {product.availableQuantityKg} kg</p>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default VegetableList;

// import React, { useContext } from "react";
// import { ShopContext } from "../context/shopContext";

// // ✅ Base64 converter
// const bufferToBase64 = (buffer) => {
//   let binary = "";
//   const bytes = new Uint8Array(buffer);
//   for (let i = 0; i < bytes.length; i++) {
//     binary += String.fromCharCode(bytes[i]);
//   }
//   return window.btoa(binary);
// };



// const VegetableList = () => {
//   const { products } = useContext(ShopContext);

//   console.log(" Products from backend:", products);

//   return (
//     <div className="p-6">
//       <h2 className="text-3xl text-green-500 font-semibold mb-6 text-center">Vegetables</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
//         {products.map((product) => (
//           <div key={product._id} className="border p-3 rounded shadow-md bg-green-200">
//             {product.image?.data ? (
//               <img
//                 src={`data:${product.image.contentType};base64,${bufferToBase64(
//                   product.image.data.data
//                 )}`}
//                 alt={product.name}
//                 className="w-full h-[150px] object-cover mb-4 p-1 rounded-md"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
//                 No Image
//               </div>
//             )}
//           <hr />
//             <h3 className="text-md font-semibold  ">{product.name}</h3>
//             <p className="text-sm text-gray-600 mt-1">{product.description}</p>
//             <div className="flex justify-between mt-2">
//               <p className="text-sm">₹ {product.pricePerKg} / kg</p>
//             {/* <p className="text-sm text-gray-500">
//               Category: {product.category}
//             </p> */}
//             <p className="text-xs text-green-500">
//               Available: {product.availableQuantityKg} kg
//             </p>
//             </div>
//             <div>
//               <p className="w-16 bg-white hover:bg-green-400 cursor-pointer hover:border-none text-center rounded-full mt-2 text-xs px-3 py-1 border border-gray-50 ">Add</p>
//             </div>
//             <div>
//               {/* <button
//                 onClick={() => deleteProductById(product._id)}
//                 className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VegetableList;
import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

// ✅ Base64 converter
const bufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};

const VegetableList = () => {
  const { products, addToCart } = useContext(ShopContext); // ✅ get addToCart

  console.log("Products from backend:", products);

  return (
    <div className="p-6">
      <h2 className="text-3xl text-green-500 font-semibold mb-6 text-center">
        Vegetables
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-3 rounded shadow-md bg-green-200"
          >
            {product.image?.data ? (
              <img
                src={`data:${product.image.contentType};base64,${bufferToBase64(
                  product.image.data.data
                )}`}
                alt={product.name}
                className="w-full h-[150px] object-cover mb-4 p-1 rounded-md"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                No Image
              </div>
            )}
            <hr />
            <h3 className="text-md font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{product.description}</p>
            <div className="flex justify-between mt-2">
              <p className="text-sm">₹ {product.pricePerKg} / kg</p>
              <p className="text-xs text-green-500">
                Available: {product.availableQuantityKg} kg
              </p>
            </div>

            {/* 🛒 Add button */}
            <div>
              <button
                onClick={() => addToCart(product._id)} // ✅ add to cart
                className="w-16 bg-white hover:bg-green-400 cursor-pointer text-center rounded-full mt-2 text-xs px-3 py-1 border border-gray-50"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetableList;
