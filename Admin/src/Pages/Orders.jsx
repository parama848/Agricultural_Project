// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import { backendUrl, currency } from "../App";
// import { toast } from "react-toastify";
// import { assets } from "../assets/assets";

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const fetchAllOrders = async () => {
//     if (!token) {
//       return null;
//     }
//     try {
//       const response = await axios.post(
//         backendUrl + "/api/order/list",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setOrders(response.data.orders.reverse());
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message);
//     }
//   };

// const statusHandler = async (event, orderId) => {
//   try {
//     const response = await axios.post(backendUrl + '/api/order/status', { orderId, status: event.target.value }, { headers: { token } });
//     if (response.data.success) {
//       await fetchAllOrders();
//     }
//   } catch (error) {
//     console.log(error);
//    toast.error(error.message);
//   }
// }

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div className="ml-10 ">
//       <h3>Order Page</h3>
//       <div>
//         {orders.map((order, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-4 items-start border border-gray-300 rounded-md p-4 my-4 shadow-sm text-sm text-gray-800"
//           >
//             {/* Image Section */}
//             <div className="flex justify-center items-start pt-1">
//               <img 
//                 src={assets.parcel_icon}
//                 alt="Parcel Icon"
//                 className="w-12 sm:w-12 md:w-14"
//               />
//             </div>

//             {/* Item & Address Info */}
//             <div>
//               {/* Ordered Items */}
//               <div className="mb-2">
//                 {order.items.map((item, idx) => (
//                   <p className="text-sm sm:text-[15px]" key={idx}>
//                     {item.name} x {item.quantity} <span>{item.size}</span>
//                     {idx < order.items.length - 1 ? "," : ""}
//                   </p>
//                 ))}
//               </div>

//               {/* Address */}
//               <p className="font-medium py-0.5 mt-3 mb-2">
//                 {order.address.firstName + " " + order.address.lastName}
//               </p>
//               <div className="text-xs text-gray-500 leading-tight">
//                 <p className="py-0.5">{order.address.street}</p>
//                 <p className="py-0.5">
//                   {order.address.city}, {order.address.state},{" "}
//                   {order.address.country}, {order.address.zipcode}
//                 </p>
//                 <p className="py-0.5">{order.address.phone}</p>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="text-xs space-y-1">
//               <p className="mb-3">
//                 <span className="font-medium">Items:</span> {order.items.length}
//               </p>
//               <p>
//                 <span className="font-medium">Method:</span>{" "}
//                 {order.paymentMethod}
//               </p>
//               <p>
//                 <span className="font-medium">Payment:</span>{" "}
//                 {order.payment ? "Done" : "Pending"}
//               </p>
//               <p>
//                 <span className="font-medium">Date:</span>{" "}
//                 {new Date(order.date).toLocaleDateString()}
//               </p>
//             </div>

//             {/* Amount */}
//             <div className=" font-semibold  text-sm sm:text-[15px]">
//               {currency}
//               {order.amount}
//             </div>

//             {/* Status Select */}
//             <div>
//               <select
//                 onChange={(event)=>statusHandler(event,order._id)}
//                 value={order.status}
//                 className="border border-gray-300 px-2 py-1 rounded text-sm p-2 font-semibold"
//               >
//                 <option value="Order Placed">Order Placed</option>
//                 <option value="Packing">Packing</option>
//                 <option value="Shipped">Shipped</option>
//                 <option value="Out For Delivery">Out For Delivery</option>
//                 <option value="Delivered">Delivered</option>
//               </select>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div></div>
//     </div>
//   );
// };

// export default Orders;

import React from 'react';

const Orders = () => {
  // Later you can fetch actual orders using axios from your /api/orders route
  const dummyOrders = [
    {
      id: 'ORD12345',
      buyer: 'Ravi Kumar',
      product: 'Tomato',
      quantity: 25,
      price: 375,
      status: 'Delivered'
    },
    {
      id: 'ORD12346',
      buyer: 'Sneha R.',
      product: 'Palak',
      quantity: 10,
      price: 120,
      status: 'Pending'
    }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Order ID</th>
            <th className="border px-4 py-2">Buyer</th>
            <th className="border px-4 py-2">Product</th>
            <th className="border px-4 py-2">Qty (kg)</th>
            <th className="border px-4 py-2">Total Price</th>
            <th className="border px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyOrders.map((order) => (
            <tr key={order.id}>
              <td className="border px-4 py-2">{order.id}</td>
              <td className="border px-4 py-2">{order.buyer}</td>
              <td className="border px-4 py-2">{order.product}</td>
              <td className="border px-4 py-2">{order.quantity}</td>
              <td className="border px-4 py-2">₹ {order.price}</td>
              <td className="border px-4 py-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
