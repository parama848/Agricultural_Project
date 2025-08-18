// // src/components/ProductCard.jsx
// import { VegContext } from '../context/VegContext';


// const ProductCard = ({ product }) => {
    
//   return (
//     <div className="border px-5 rounded-lg shadow-md w-[240px]bg-white bg-green-200">
//       <img
//         src={product.image[0]}
//         alt={product.name}
//         className="h-40 w-full object-cover rounded mb-2"
//       />
//       <h3 className="text-sm mb-2 font-semibold">{product.name}</h3>
//       {/* <p className="text-xm text-gray-600">{product.nativeLanguageName}</p> */}
//       <p className="text-xs text-gray-500">{product.description}</p>
//       <p className="mt-1 mb-2 text-green-600 font-bold">₹{product.pricePerKg} / ₹Kg</p>
//     </div>
//   );
// };

// export default ProductCard;

const ProductCard = ({ product }) => {
  return (
    <div className="bg-green-100 rounded-lg shadow-md overflow-hidden w-full max-w-xs">
      <img
        src={product.image[0]}
        alt={product.name}
        className="w-full h-40 object-contain bg-white"
      />
      <div className="p-4">
        <h3 className="font-semibold text-black">{product.name}</h3>
        <p className="text-sm text-gray-700 mb-2">{product.description}</p>
        <p className="text-green-600 font-bold">₹{product.pricePerKg} / ₹Kg</p>
      </div>
    </div>
  );
};
export default ProductCard;
