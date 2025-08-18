// import React from 'react';
// // import ProductCard from '../components/ProductCard';
// import { useContext } from 'react';
// import ShopContext from '../context/ShopContext'

// const VegetableList = () => {

//   const { products } = useContext(ShopContext);

//   // const vegetableItems = products.filter(
//   //   item => item.category.toLowerCase() === 'vegetables'
//   // );

//   return (
//     <div className="my-6 px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
//         {products.map((product) => (
//           <div key={product._id} className="border p-4 rounded shadow-md">
//             {product.image?.data ? (
//               <img
//                 src={`data:${product.image.contentType};base64,${bufferToBase64(
//                   product.image.data.data
//                 )}`}
//                 alt={product.name}
//                 className="w-full h-48 object-cover mb-4 rounded"
//               />
//             ) : (
//               <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
//                 No Image
//               </div>
//             )}

//             <h3 className="text-lg font-semibold">{product.name}</h3>
//             <p className="text-gray-600">{product.description}</p>
//             <p className="mt-2 font-medium">₹ {product.pricePerKg} / kg</p>
//             <p className="text-sm text-gray-500">
//               Category: {product.category}
//             </p>
//             <p className="text-sm text-green-500">
//               Available: {product.availableQuantityKg} kg
//             </p>
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


import React, { useContext } from 'react';
import {ShopContext} from '../context/ShopContext';


// Helper function to convert buffer to base64
const bufferToBase64 = (buffer) => {
  return btoa(
    new Uint8Array(buffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ''
    )
  );
};

const LettuceList = () => {
  const { products } = useContext(ShopContext);

  // Filter only vegetable category
  const vegetableItems = products.filter(
    (item) => item.category.toLowerCase() === 'vegetables'
  );

  return (
    <div className="my-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
        {vegetableItems.slice(0,4).map((product) => (
          <div key={product._id} className="border p-4 rounded shadow-md">
            {product.image?.data ? (
              <img
                src={`data:${product.image.contentType};base64,${bufferToBase64(
                  product.image.data.data
                )}`}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                No Image
              </div>
            )}

            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="mt-2 font-medium">₹ {product.pricePerKg} / kg</p>
            <p className="text-sm text-gray-500">
              Category: {product.category}
            </p>
            <p className="text-sm text-green-500">
              Available: {product.availableQuantityKg} kg
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LettuceList;

