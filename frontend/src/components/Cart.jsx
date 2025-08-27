// // // // // // // // import React, { useContext } from "react";
// // // // // // // // import Title from "./Title";
// // // // // // // // import { ShopContext } from "../context/ShopContext";

// // // // // // // // const Cart = () => {
// // // // // // // //   const { cartItems } = useContext(ShopContext);

// // // // // // // //   // ✅ Make sure cartItems is always an array
// // // // // // // //   const items = Array.isArray(cartItems) ? cartItems : [];

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <div className="mb-3">
// // // // // // // //         <Title text1="Cart" text2="Items" />
// // // // // // // //       </div>

// // // // // // // //       {items.length === 0 ? (
// // // // // // // //         <p className="text-gray-500">Your cart is empty</p>
// // // // // // // //       ) : (
// // // // // // // //         <div className="space-y-4">
// // // // // // // //           {items.map((item) => (
// // // // // // // //             <div
// // // // // // // //               key={item._id}
// // // // // // // //               className="flex items-center justify-between border-b pb-2"
// // // // // // // //             >
// // // // // // // //               <div className="flex items-center gap-3">
// // // // // // // //                 <img
// // // // // // // //                   src={item.image}
// // // // // // // //                   alt={item.name}
// // // // // // // //                   className="w-16 h-16 object-cover rounded"
// // // // // // // //                 />
// // // // // // // //                 <div>
// // // // // // // //                   <h3 className="font-semibold">{item.name}</h3>
// // // // // // // //                   <p className="text-sm text-gray-500">{item.category}</p>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //               <div className="text-right">
// // // // // // // //                 <p className="font-semibold">${item.price}</p>
// // // // // // // //                 <p className="text-sm">Qty: {item.quantity}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Cart;
// // // // // // // import React, { useContext } from "react";
// // // // // // // import Title from "./Title";
// // // // // // // import { ShopContext } from "../context/ShopContext";

// // // // // // // const Cart = () => {
// // // // // // //   const { cartItems, products } = useContext(ShopContext);

// // // // // // //   const items = Object.entries(cartItems); // [[productId, qty], [id2, qty2]]

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <div className="mb-3">
// // // // // // //         <Title text1="Cart" text2="Items" />
// // // // // // //       </div>

// // // // // // //       {items.length === 0 ? (
// // // // // // //         <p className="text-gray-500">Your cart is empty</p>
// // // // // // //       ) : (
// // // // // // //         <div className="space-y-4">
// // // // // // //           {items.map(([productId, quantity]) => {
// // // // // // //             const product = products.find((p) => p._id === productId);
// // // // // // //             if (!product) return null;

// // // // // // //             return (
// // // // // // //               <div
// // // // // // //                 key={product._id}
// // // // // // //                 className="flex items-center justify-between border-b pb-2"
// // // // // // //               >
// // // // // // //                 <div className="flex items-center gap-3">
// // // // // // //                   <img
// // // // // // //                     src={`data:${product.image.contentType};base64,${btoa(
// // // // // // //                       new Uint8Array(product.image.data.data).reduce(
// // // // // // //                         (data, byte) => data + String.fromCharCode(byte),
// // // // // // //                         ""
// // // // // // //                       )
// // // // // // //                     )}`}
// // // // // // //                     alt={product.name}
// // // // // // //                     className="w-16 h-16 object-cover rounded"
// // // // // // //                   />
// // // // // // //                   <div>
// // // // // // //                     <h3 className="font-semibold">{product.name}</h3>
// // // // // // //                     <p className="text-sm text-gray-500">{product.category}</p>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //                 <div className="text-right">
// // // // // // //                   <p className="font-semibold">₹{product.pricePerKg}</p>
// // // // // // //                   <p className="text-sm">Qty: {quantity}</p>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             );
// // // // // // //           })}
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Cart;
// // // // // // import React, { useContext } from "react";
// // // // // // import { ShopContext } from "../context/ShopContext";

// // // // // // const Cart = () => {
// // // // // //   const { cartItems, products, removeFromCart } = useContext(ShopContext);

// // // // // //   const items = Object.entries(cartItems); // [[productId, qty]]

// // // // // //   // calculate totals
// // // // // //   const subtotal = items.reduce((sum, [id, qty]) => {
// // // // // //     const product = products.find((p) => p._id === id);
// // // // // //     return product ? sum + product.pricePerKg * qty : sum;
// // // // // //   }, 0);

// // // // // //   const shippingFee = subtotal > 0 ? 0 : 0; // Free shipping
// // // // // //   const tax = subtotal * 0.02; // 2% tax
// // // // // //   const total = subtotal + shippingFee + tax;

// // // // // //   return (
// // // // // //     <div className="flex flex-col lg:flex-row gap-6 p-6">
// // // // // //       {/* LEFT: Product list */}
// // // // // //       <div className="flex-1">
// // // // // //         <h2 className="text-2xl font-bold mb-4">
// // // // // //           Shopping Cart{" "}
// // // // // //           <span className="text-sm text-gray-500">
// // // // // //             ({items.length} Items)
// // // // // //           </span>
// // // // // //         </h2>

// // // // // //         {items.length === 0 ? (
// // // // // //           <p className="text-gray-500">Your cart is empty</p>
// // // // // //         ) : (
// // // // // //           <div className="space-y-4">
// // // // // //             {items.map(([id, qty]) => {
// // // // // //               const product = products.find((p) => p._id === id);
// // // // // //               if (!product) return null;

// // // // // //               return (
// // // // // //                 <div
// // // // // //                   key={id}
// // // // // //                   className="flex items-center justify-between border-b pb-3"
// // // // // //                 >
// // // // // //                   {/* product details */}
// // // // // //                   <div className="flex items-center gap-3">
// // // // // //                     {product.image?.data ? (
// // // // // //                       <img
// // // // // //                         src={`data:${product.image.contentType};base64,${btoa(
// // // // // //                           new Uint8Array(product.image.data.data).reduce(
// // // // // //                             (data, byte) => data + String.fromCharCode(byte),
// // // // // //                             ""
// // // // // //                           )
// // // // // //                         )}`}
// // // // // //                         alt={product.name}
// // // // // //                         className="w-20 h-20 object-cover rounded"
// // // // // //                       />
// // // // // //                     ) : (
// // // // // //                       <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">
// // // // // //                         No Img
// // // // // //                       </div>
// // // // // //                     )}

// // // // // //                     <div>
// // // // // //                       <h3 className="font-semibold">{product.name}</h3>
// // // // // //                       <p className="text-sm text-gray-500">
// // // // // //                         Qty: {qty}
// // // // // //                       </p>
// // // // // //                     </div>
// // // // // //                   </div>

// // // // // //                   {/* price + remove */}
// // // // // //                   <div className="text-right flex items-center gap-3">
// // // // // //                     <p className="font-semibold ">
// // // // // //                       ₹{product.pricePerKg * qty}
// // // // // //                     </p>
// // // // // //                     <button
// // // // // //                       onClick={() => removeFromCart(id)}
// // // // // //                       className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
// // // // // //                     >
// // // // // //                        Remove
// // // // // //                     </button>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               );
// // // // // //             })}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>

// // // // // //       {/* RIGHT: Order Summary */}
// // // // // //       <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
// // // // // //         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>

// // // // // //         <div className="mb-4">
// // // // // //           <p className="text-sm text-gray-600">DELIVERY ADDRESS</p>
// // // // // //           <p className="text-sm">No address found</p>
// // // // // //           <button className="text-blue-500 text-sm">Change</button>
// // // // // //         </div>

// // // // // //         <div className="mb-4">
// // // // // //           <p className="text-sm text-gray-600">PAYMENT METHOD</p>
// // // // // //           <select className="border rounded w-full p-2 mt-1">
// // // // // //             <option>Cash On Delivery</option>
// // // // // //             <option>Credit Card</option>
// // // // // //             <option>UPI</option>
// // // // // //           </select>
// // // // // //         </div>

// // // // // //         <div className="space-y-2 text-sm">
// // // // // //           <div className="flex justify-between">
// // // // // //             <span>Price</span>
// // // // // //             <span>₹{subtotal}</span>
// // // // // //           </div>
// // // // // //           <div className="flex justify-between">
// // // // // //             <span>Shipping Fee</span>
// // // // // //             <span className="text-green-600">Free</span>
// // // // // //           </div>
// // // // // //           <div className="flex justify-between">
// // // // // //             <span>Tax (2%)</span>
// // // // // //             <span>₹{tax.toFixed(2)}</span>
// // // // // //           </div>
// // // // // //           <div className="border-t pt-2 flex justify-between font-bold text-base">
// // // // // //             <span>Total Amount</span>
// // // // // //             <span>₹{total.toFixed(2)}</span>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <button className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700">
// // // // // //           Place Order
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Cart;
// // // // // import React, { useContext } from "react";
// // // // // import { ShopContext } from "../context/ShopContext";

// // // // // const Cart = () => {
// // // // //   const { cartItems, products, removeFromCart } = useContext(ShopContext);

// // // // //   const items = Object.entries(cartItems); // [[productId, qty]]

// // // // //   // calculate totals
// // // // //   const subtotal = items.reduce((sum, [id, qty]) => {
// // // // //     const product = products.find((p) => p._id === id);
// // // // //     return product ? sum + product.pricePerKg * qty : sum;
// // // // //   }, 0);

// // // // //   const shippingFee = subtotal > 0 ? 0 : 0; // Free shipping
// // // // //   const tax = subtotal * 0.02; // 2% tax
// // // // //   const total = subtotal + shippingFee + tax;

// // // // //   // Razorpay payment handler
// // // // //   const handlePlaceOrder = async () => {
// // // // //     try {
// // // // //       // 1️⃣ Call backend to create order
// // // // //       const response = await fetch("http://localhost:4000/api/payment/create-order", {
// // // // //         method: "POST",
// // // // //         headers: { "Content-Type": "application/json" },
// // // // //         body: JSON.stringify({ amount: total.toFixed(2), currency: "INR" }),
// // // // //       });

// // // // //       const data = await response.json();

// // // // //       if (!data.success) {
// // // // //         alert("Failed to create order");
// // // // //         return;
// // // // //       }

// // // // //       const { order } = data;

// // // // //       // 2️⃣ Setup Razorpay options
// // // // //       const options = {
// // // // //         key: "rzp_test_R9zRk7LZzUasl3", // Test key
// // // // //         amount: order.amount,
// // // // //         currency: order.currency,
// // // // //         name: "My Shop",
// // // // //         description: "Test Transaction",
// // // // //         order_id: order.id,
// // // // //         handler: async function (response) {
// // // // //           // 3️⃣ Verify payment on backend
// // // // //           const verifyRes = await fetch("http://localhost:4000/api/payment/verify-payment", {
// // // // //             method: "POST",
// // // // //             headers: { "Content-Type": "application/json" },
// // // // //             body: JSON.stringify({
// // // // //               razorpay_order_id: response.razorpay_order_id,
// // // // //               razorpay_payment_id: response.razorpay_payment_id,
// // // // //               razorpay_signature: response.razorpay_signature,
// // // // //             }),
// // // // //           });

// // // // //           const verifyData = await verifyRes.json();
// // // // //           if (verifyData.success) {
// // // // //             alert("Payment Successful!");
// // // // //           } else {
// // // // //             alert("Payment verification failed!");
// // // // //           }
// // // // //         },
// // // // //         prefill: {
// // // // //           name: "Test User",
// // // // //           email: "test@example.com",
// // // // //           contact: "9999999999",
// // // // //         },
// // // // //         theme: { color: "#3399cc" },
// // // // //       };

// // // // //       // 4️⃣ Open Razorpay checkout
// // // // //       const rzp = new window.Razorpay(options);
// // // // //       rzp.open();
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //       alert("Payment failed!");
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex flex-col lg:flex-row gap-6 p-6">
// // // // //       {/* LEFT: Product list */}
// // // // //       <div className="flex-1">
// // // // //         <h2 className="text-2xl font-bold mb-4">
// // // // //           Shopping Cart{" "}
// // // // //           <span className="text-sm text-gray-500">({items.length} Items)</span>
// // // // //         </h2>

// // // // //         {items.length === 0 ? (
// // // // //           <p className="text-gray-500">Your cart is empty</p>
// // // // //         ) : (
// // // // //           <div className="space-y-4">
// // // // //             {items.map(([id, qty]) => {
// // // // //               const product = products.find((p) => p._id === id);
// // // // //               if (!product) return null;

// // // // //               return (
// // // // //                 <div
// // // // //                   key={id}
// // // // //                   className="flex items-center justify-between border-b pb-3"
// // // // //                 >
// // // // //                   {/* product details */}
// // // // //                   <div className="flex items-center gap-3">
// // // // //                     {product.image?.data ? (
// // // // //                       <img
// // // // //                         src={`data:${product.image.contentType};base64,${btoa(
// // // // //                           new Uint8Array(product.image.data.data).reduce(
// // // // //                             (data, byte) => data + String.fromCharCode(byte),
// // // // //                             ""
// // // // //                           )
// // // // //                         )}`}
// // // // //                         alt={product.name}
// // // // //                         className="w-20 h-20 object-cover rounded"
// // // // //                       />
// // // // //                     ) : (
// // // // //                       <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">
// // // // //                         No Img
// // // // //                       </div>
// // // // //                     )}

// // // // //                     <div>
// // // // //                       <h3 className="font-semibold">{product.name}</h3>
// // // // //                       <p className="text-sm text-gray-500">Qty: {qty}</p>
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   {/* price + remove */}
// // // // //                   <div className="text-right flex items-center gap-3">
// // // // //                     <p className="font-semibold ">₹{product.pricePerKg * qty}</p>
// // // // //                     <button
// // // // //                       onClick={() => removeFromCart(id)}
// // // // //                       className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
// // // // //                     >
// // // // //                       Remove
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               );
// // // // //             })}
// // // // //           </div>
// // // // //         )}
// // // // //       </div>

// // // // //       {/* RIGHT: Order Summary */}
// // // // //       <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
// // // // //         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>

// // // // //         <div className="mb-4">
// // // // //           <p className="text-sm text-gray-600">DELIVERY ADDRESS</p>
// // // // //           <p className="text-sm">No address found</p>
// // // // //           <button className="text-blue-500 text-sm">Change</button>
// // // // //         </div>

// // // // //         <div className="mb-4">
// // // // //           <p className="text-sm text-gray-600">PAYMENT METHOD</p>
// // // // //           <select className="border rounded w-full p-2 mt-1">
// // // // //             <option>Cash On Delivery</option>
// // // // //             <option>Credit Card</option>
// // // // //             <option>UPI</option>
// // // // //           </select>
// // // // //         </div>

// // // // //         <div className="space-y-2 text-sm">
// // // // //           <div className="flex justify-between">
// // // // //             <span>Price</span>
// // // // //             <span>₹{subtotal}</span>
// // // // //           </div>
// // // // //           <div className="flex justify-between">
// // // // //             <span>Shipping Fee</span>
// // // // //             <span className="text-green-600">Free</span>
// // // // //           </div>
// // // // //           <div className="flex justify-between">
// // // // //             <span>Tax (2%)</span>
// // // // //             <span>₹{tax.toFixed(2)}</span>
// // // // //           </div>
// // // // //           <div className="border-t pt-2 flex justify-between font-bold text-base">
// // // // //             <span>Total Amount</span>
// // // // //             <span>₹{total.toFixed(2)}</span>
// // // // //           </div>
// // // // //         </div>

// // // // //         <button
// // // // //           className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700"
// // // // //           onClick={handlePlaceOrder}
// // // // //         >
// // // // //           Place Order
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Cart;
// // // // import React, { useContext } from "react";
// // // // import { ShopContext } from "../context/ShopContext";

// // // // const Cart = () => {
// // // //   const { cartItems, products, removeFromCart } = useContext(ShopContext);

// // // //   const items = Object.entries(cartItems);

// // // //   // totals
// // // //   const subtotal = items.reduce((sum, [id, qty]) => {
// // // //     const product = products.find((p) => p._id === id);
// // // //     return product ? sum + product.pricePerKg * qty : sum;
// // // //   }, 0);

// // // //   const tax = subtotal * 0.02;
// // // //   const total = subtotal + tax;

// // // //   // Razorpay
// // // //   const handlePlaceOrder = async () => {
// // // //     try {
// // // //       const amountInPaise = Math.round(total * 100);

// // // //       // 1️⃣ Create order on backend
// // // //       const response = await fetch("http://localhost:4000/api/payment/create-order", {
// // // //         method: "POST",
// // // //         headers: { "Content-Type": "application/json" },
// // // //         body: JSON.stringify({ amount: amountInPaise, currency: "INR" }),
// // // //       });

// // // //       const data = await response.json();
// // // //       if (!data.success) {
// // // //         alert("Failed to create order");
// // // //         return;
// // // //       }

// // // //       const { order } = data;

// // // //       // 2️⃣ Razorpay options
// // // //       const options = {
// // // //         key: "rzp_test_R9zRk7LZzUasl3", // test key
// // // //         amount: order.amount,
// // // //         currency: order.currency,
// // // //         name: "My Shop",
// // // //         description: "Test Transaction",
// // // //         order_id: order.id,
// // // //         handler: async (response) => {
// // // //           const verifyRes = await fetch("http://localhost:4000/api/payment/verify-payment", {
// // // //             method: "POST",
// // // //             headers: { "Content-Type": "application/json" },
// // // //             body: JSON.stringify({
// // // //               razorpay_order_id: response.razorpay_order_id,
// // // //               razorpay_payment_id: response.razorpay_payment_id,
// // // //               razorpay_signature: response.razorpay_signature,
// // // //             }),
// // // //           });

// // // //           const verifyData = await verifyRes.json();
// // // //           if (verifyData.success) alert("Payment Successful!");
// // // //           else alert("Payment verification failed!");
// // // //         },
// // // //         prefill: {
// // // //           name: "Test User",
// // // //           email: "test@example.com",
// // // //           contact: "9999999999",
// // // //         },
// // // //         theme: { color: "#3399cc" },
// // // //       };

// // // //       const rzp = new window.Razorpay(options);
// // // //       rzp.open();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //       alert("Payment failed!");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="flex flex-col lg:flex-row gap-6 p-6">
// // // //       {/* LEFT: Products */}
// // // //       <div className="flex-1">
// // // //         <h2 className="text-2xl font-bold mb-4">
// // // //           Shopping Cart <span className="text-sm text-gray-500">({items.length} Items)</span>
// // // //         </h2>
// // // //         {items.length === 0 ? (
// // // //           <p className="text-gray-500">Your cart is empty</p>
// // // //         ) : (
// // // //           <div className="space-y-4">
// // // //             {items.map(([id, qty]) => {
// // // //               const product = products.find((p) => p._id === id);
// // // //               if (!product) return null;

// // // //               return (
// // // //                 <div key={id} className="flex items-center justify-between border-b pb-3">
// // // //                   <div className="flex items-center gap-3">
// // // //                     {product.image?.data ? (
// // // //                       <img
// // // //                         src={`data:${product.image.contentType};base64,${btoa(
// // // //                           new Uint8Array(product.image.data.data).reduce(
// // // //                             (data, byte) => data + String.fromCharCode(byte),
// // // //                             ""
// // // //                           )
// // // //                         )}`}
// // // //                         alt={product.name}
// // // //                         className="w-20 h-20 object-cover rounded"
// // // //                       />
// // // //                     ) : (
// // // //                       <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">No Img</div>
// // // //                     )}
// // // //                     <div>
// // // //                       <h3 className="font-semibold">{product.name}</h3>
// // // //                       <p className="text-sm text-gray-500">Qty: {qty}</p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="text-right flex items-center gap-3">
// // // //                     <p className="font-semibold ">₹{product.pricePerKg * qty}</p>
// // // //                     <button
// // // //                       onClick={() => removeFromCart(id)}
// // // //                       className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
// // // //                     >
// // // //                       Remove
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         )}
// // // //       </div>

// // // //       {/* RIGHT: Order Summary */}
// // // //       <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
// // // //         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
// // // //         <div className="space-y-2 text-sm">
// // // //           <div className="flex justify-between"><span>Price</span><span>₹{subtotal}</span></div>
// // // //           <div className="flex justify-between"><span>Tax (2%)</span><span>₹{tax.toFixed(2)}</span></div>
// // // //           <div className="border-t pt-2 flex justify-between font-bold text-base"><span>Total Amount</span><span>₹{total.toFixed(2)}</span></div>
// // // //         </div>
// // // //         <button
// // // //           className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700"
// // // //           onClick={handlePlaceOrder}
// // // //         >
// // // //           Place Order
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Cart;

// // // import React, { useContext } from "react";
// // // import { ShopContext } from "../context/ShopContext";

// // // const Cart = () => {
// // //   const { cartItems, products, removeFromCart } = useContext(ShopContext);
// // //   const items = Object.entries(cartItems);

// // //   // Calculate totals
// // //   const subtotal = items.reduce((sum, [id, qty]) => {
// // //     const product = products.find((p) => p._id === id);
// // //     return product ? sum + product.pricePerKg * qty : sum;
// // //   }, 0);

// // //   const tax = subtotal * 0.02;
// // //   const total = subtotal + tax;

// // //   // Razorpay payment handler
// // //   const handlePlaceOrder = async () => {
// // //     try {
// // //       const amountInPaise = Math.round(total * 100); // convert to paisa

// // //       // 1️⃣ Create order on backend
// // //       const res = await fetch("http://localhost:4000/api/payment/create-order", {
// // //         method: "POST",
// // //         headers: { "Content-Type": "application/json" },
// // //         body: JSON.stringify({ amount: amountInPaise, currency: "INR" }),
// // //       });

// // //       const data = await res.json();
// // //       if (!data.success) return alert("Failed to create order");

// // //       const { order } = data;

// // //       // 2️⃣ Setup Razorpay options
// // //       const options = {
// // //         key: "rzp_test_R9zRk7LZzUasl3", // Test key
// // //         amount: order.amount,
// // //         currency: order.currency,
// // //         name: "My Shop",
// // //         description: "Test Transaction",
// // //         order_id: order.id,
// // //         handler: async (response) => {
// // //           // 3️⃣ Verify payment
// // //           const verifyRes = await fetch("http://localhost:4000/api/payment/verify-payment", {
// // //             method: "POST",
// // //             headers: { "Content-Type": "application/json" },
// // //             body: JSON.stringify({
// // //               razorpay_order_id: response.razorpay_order_id,
// // //               razorpay_payment_id: response.razorpay_payment_id,
// // //               razorpay_signature: response.razorpay_signature,
// // //             }),
// // //           });

// // //           const verifyData = await verifyRes.json();
// // //           if (verifyData.success) alert("Payment Successful!");
// // //           else alert("Payment verification failed!");
// // //         },
// // //         prefill: {
// // //           name: "Test User",
// // //           email: "test@example.com",
// // //           contact: "9999999999",
// // //         },
// // //         theme: { color: "#3399cc" },
// // //       };

// // //       const rzp = new window.Razorpay(options);
// // //       rzp.open();
// // //     } catch (error) {
// // //       console.error(error);
// // //       alert("Payment failed!");
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex flex-col lg:flex-row gap-6 p-6">
// // //       {/* LEFT: Products */}
// // //       <div className="flex-1">
// // //         <h2 className="text-2xl font-bold mb-4">
// // //           Shopping Cart <span className="text-sm text-gray-500">({items.length} Items)</span>
// // //         </h2>

// // //         {items.length === 0 ? (
// // //           <p className="text-gray-500">Your cart is empty</p>
// // //         ) : (
// // //           <div className="space-y-4">
// // //             {items.map(([id, qty]) => {
// // //               const product = products.find((p) => p._id === id);
// // //               if (!product) return null;

// // //               return (
// // //                 <div key={id} className="flex items-center justify-between border-b pb-3">
// // //                   <div className="flex items-center gap-3">
// // //                     {product.image?.data ? (
// // //                       <img
// // //                         src={`data:${product.image.contentType};base64,${btoa(
// // //                           new Uint8Array(product.image.data.data).reduce(
// // //                             (data, byte) => data + String.fromCharCode(byte),
// // //                             ""
// // //                           )
// // //                         )}`}
// // //                         alt={product.name}
// // //                         className="w-20 h-20 object-cover rounded"
// // //                       />
// // //                     ) : (
// // //                       <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">No Img</div>
// // //                     )}
// // //                     <div>
// // //                       <h3 className="font-semibold">{product.name}</h3>
// // //                       <p className="text-sm text-gray-500">Qty: {qty}</p>
// // //                     </div>
// // //                   </div>

// // //                   <div className="text-right flex items-center gap-3">
// // //                     <p className="font-semibold">₹{product.pricePerKg * qty}</p>
// // //                     <button
// // //                       onClick={() => removeFromCart(id)}
// // //                       className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
// // //                     >
// // //                       Remove
// // //                     </button>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         )}
// // //       </div>

// // //       {/* RIGHT: Order Summary */}
// // //       <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
// // //         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
// // //         <div className="space-y-2 text-sm">
// // //           <div className="flex justify-between"><span>Price</span><span>₹{subtotal}</span></div>
// // //           <div className="flex justify-between"><span>Tax (2%)</span><span>₹{tax.toFixed(2)}</span></div>
// // //           <div className="border-t pt-2 flex justify-between font-bold text-base"><span>Total Amount</span><span>₹{total.toFixed(2)}</span></div>
// // //         </div>
// // //         <button
// // //           className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700"
// // //           onClick={handlePlaceOrder}
// // //         >
// // //           Place Order
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Cart;
// // import React, { useContext } from "react";
// // import { ShopContext } from "../context/ShopContext";

// // const Cart = () => {
// //   const { cartItems, products, removeFromCart, updateCartItemQty } = useContext(ShopContext);
// //   const items = Object.entries(cartItems);

// //   // Calculate totals dynamically
// //   const subtotal = items.reduce((sum, [id, qty]) => {
// //     const product = products.find((p) => p._id === id);
// //     return product ? sum + product.pricePerKg * qty : sum;
// //   }, 0);

// //   const tax = subtotal * 0.02;
// //   const total = subtotal + tax;

// //   // Razorpay payment handler
// //   const handlePlaceOrder = async () => {
// //     try {
// //       const amountInPaise = Math.round(total * 100);

// //       const res = await fetch("http://localhost:4000/api/payment/create-order", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ amount: amountInPaise, currency: "INR" }),
// //       });

// //       const data = await res.json();
// //       if (!data.success) return alert("Failed to create order");

// //       const { order } = data;

// //       const options = {
// //         key: "rzp_test_R9zRk7LZzUasl3",
// //         amount: order.amount,
// //         currency: order.currency,
// //         name: "My Shop",
// //         description: "Test Transaction",
// //         order_id: order.id,
// //         handler: async (response) => {
// //           const verifyRes = await fetch("http://localhost:4000/api/payment/verify-payment", {
// //             method: "POST",
// //             headers: { "Content-Type": "application/json" },
// //             body: JSON.stringify({
// //               razorpay_order_id: response.razorpay_order_id,
// //               razorpay_payment_id: response.razorpay_payment_id,
// //               razorpay_signature: response.razorpay_signature,
// //             }),
// //           });

// //           const verifyData = await verifyRes.json();
// //           if (verifyData.success) alert("Payment Successful!");
// //           else alert("Payment verification failed!");
// //         },
// //         prefill: {
// //           name: "Test User",
// //           email: "test@example.com",
// //           contact: "9999999999",
// //         },
// //         theme: { color: "#3399cc" },
// //       };

// //       const rzp = new window.Razorpay(options);
// //       rzp.open();
// //     } catch (error) {
// //       console.error(error);
// //       alert("Payment failed!");
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col lg:flex-row gap-6 p-6">
// //       {/* LEFT: Products */}
// //       <div className="flex-1">
// //         <h2 className="text-2xl font-bold mb-4">
// //           Shopping Cart <span className="text-sm text-gray-500">({items.length} Items)</span>
// //         </h2>

// //         {items.length === 0 ? (
// //           <p className="text-gray-500">Your cart is empty</p>
// //         ) : (
// //           <div className="space-y-4">
// //             {items.map(([id, qty]) => {
// //               const product = products.find((p) => p._id === id);
// //               if (!product) return null;

// //               return (
// //                 <div key={id} className="flex items-center justify-between border-b pb-3">
// //                   <div className="flex items-center gap-3">
// //                     {product.image?.data ? (
// //                       <img
// //                         src={`data:${product.image.contentType};base64,${btoa(
// //                           new Uint8Array(product.image.data.data).reduce(
// //                             (data, byte) => data + String.fromCharCode(byte),
// //                             ""
// //                           )
// //                         )}`}
// //                         alt={product.name}
// //                         className="w-20 h-20 object-cover rounded"
// //                       />
// //                     ) : (
// //                       <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">No Img</div>
// //                     )}
// //                     <div>
// //                       <h3 className="font-semibold">{product.name}</h3>
// //                       <div className="flex items-center gap-2 mt-1">
// //                         <button
// //                           className="px-2 bg-gray-200 rounded"
// //                           onClick={() => updateCartItemQty(id, qty - 1)}
// //                           disabled={qty <= 1}
// //                         >
// //                           -
// //                         </button>
// //                         <span>{qty}</span>
// //                         <button
// //                           className="px-2 bg-gray-200 rounded"
// //                           onClick={() => updateCartItemQty(id, qty + 1)}
// //                         >
// //                           +
// //                         </button>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <div className="text-right flex items-center gap-3">
// //                     <p className="font-semibold">₹{product.pricePerKg * qty}</p>
// //                     <button
// //                       onClick={() => removeFromCart(id)}
// //                       className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
// //                     >
// //                       Remove
// //                     </button>
// //                   </div>
// //                 </div>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </div>

// //       {/* RIGHT: Order Summary */}
// //       <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
// //         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
// //         <div className="space-y-2 text-sm">
// //           <div className="flex justify-between"><span>Price</span><span>₹{subtotal}</span></div>
// //           <div className="flex justify-between"><span>Tax (2%)</span><span>₹{tax.toFixed(2)}</span></div>
// //           <div className="border-t pt-2 flex justify-between font-bold text-base"><span>Total Amount</span><span>₹{total.toFixed(2)}</span></div>
// //         </div>
// //         <button
// //           className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700"
// //           onClick={handlePlaceOrder}
// //         >
// //           Place Order
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;


// import React, { useContext } from "react";
// import { ShopContext } from "../context/ShopContext";

// const Cart = () => {
//   const { cartItems, products, removeFromCart, updateCartItemQty } = useContext(ShopContext);
//   const items = Object.entries(cartItems);

//   // Calculate totals dynamically
//   const subtotal = items.reduce((sum, [id, qty]) => {
//     const product = products.find((p) => p._id === id);
//     return product ? sum + product.pricePerKg * qty : sum;
//   }, 0);

//   const tax = subtotal * 0.02;
//   const total = subtotal + tax;

//   // Razorpay payment handler
//   const handlePlaceOrder = async () => {
//     try {
//       const amountInPaise = Math.round(total * 100);

//       // 1️⃣ Create order on backend
//       const res = await fetch("http://localhost:4000/api/payment/create-order", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ amount: amountInPaise, currency: "INR" }),
//       });

//       const data = await res.json();
//       if (!data.success) return alert("Failed to create order");

//       const { order } = data;

//       // 2️⃣ Setup Razorpay options
//       const options = {
//         key: "rzp_test_R9zRk7LZzUasl3",
//         amount: order.amount,
//         currency: order.currency,
//         name: "My Shop",
//         description: "Test Transaction",
//         order_id: order.id,
//         handler: async (response) => {
//           // 3️⃣ Verify payment
//           const verifyRes = await fetch("http://localhost:4000/api/payment/verify-payment", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//             }),
//           });

//           const verifyData = await verifyRes.json();
//           if (verifyData.success) alert("Payment Successful!");
//           else alert("Payment verification failed!");
//         },
//         prefill: {
//           name: "Test User",
//           email: "test@example.com",
//           contact: "9999999999",
//         },
//         theme: { color: "#3399cc" },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error(error);
//       alert("Payment failed!");
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row gap-6 p-6">
//       {/* LEFT: Products */}
//       <div className="flex-1">
//         <h2 className="text-2xl font-bold mb-4">
//           Shopping Cart <span className="text-sm text-gray-500">({items.length} Items)</span>
//         </h2>

//         {items.length === 0 ? (
//           <p className="text-gray-500">Your cart is empty</p>
//         ) : (
//           <div className="space-y-4">
//             {items.map(([id, qty]) => {
//               const product = products.find((p) => p._id === id);
//               if (!product) return null;

//               return (
//                 <div key={id} className="flex items-center justify-between border-b pb-3">
//                   <div className="flex items-center gap-3">
//                     {product.image?.data ? (
//                       <img
//                         src={`data:${product.image.contentType};base64,${btoa(
//                           new Uint8Array(product.image.data.data).reduce(
//                             (data, byte) => data + String.fromCharCode(byte),
//                             ""
//                           )
//                         )}`}
//                         alt={product.name}
//                         className="w-20 h-20 object-cover rounded"
//                       />
//                     ) : (
//                       <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">
//                         No Img
//                       </div>
//                     )}
//                     <div>
//                       <h3 className="font-semibold">{product.name}</h3>
//                       <div className="flex items-center gap-2 mt-1">
//                         <button
//                           className="px-2 bg-gray-200 rounded"
//                           onClick={() => updateCartItemQty(id, qty - 1)}
//                           disabled={qty <= 1}
//                         >
//                           -
//                         </button>
//                         <span>{qty}</span>
//                         <button
//                           className="px-2 bg-gray-200 rounded"
//                           onClick={() => updateCartItemQty(id, qty + 1)}
//                         >
//                           +
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="text-right flex items-center gap-3">
//                     <p className="font-semibold">₹{product.pricePerKg * qty}</p>
//                     <button
//                       onClick={() => removeFromCart(id)}
//                       className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>

//       {/* RIGHT: Order Summary */}
//       <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
//         <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
//         <div className="space-y-2 text-sm">
//           <div className="flex justify-between">
//             <span>Price</span>
//             <span>₹{subtotal}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Tax (2%)</span>
//             <span>₹{tax.toFixed(2)}</span>
//           </div>
//           <div className="border-t pt-2 flex justify-between font-bold text-base">
//             <span>Total Amount</span>
//             <span>₹{total.toFixed(2)}</span>
//           </div>
//         </div>
//         <button
//           className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700"
//           onClick={handlePlaceOrder}
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Cart = () => {
  const { cartItems, products, removeFromCart, updateCartItemQty } = useContext(ShopContext);
  const items = Object.entries(cartItems);

  // Calculate totals dynamically
  const subtotal = items.reduce((sum, [id, qty]) => {
    const product = products.find((p) => p._id === id);
    return product ? sum + product.pricePerKg * qty : sum;
  }, 0);

  const tax = subtotal * 0.02;
  const total = subtotal + tax;

  const handlePlaceOrder = async () => {
    try {
      const amountInPaise = Math.round(total * 100);
      const res = await fetch("http://localhost:4000/api/payment/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amountInPaise, currency: "INR" }),
      });

      const data = await res.json();
      if (!data.success) return alert("Failed to create order");

      const { order } = data;

      const options = {
        key: "rzp_test_R9zRk7LZzUasl3",
        amount: order.amount,
        currency: order.currency,
        name: "My Shop",
        description: "Test Transaction",
        order_id: order.id,
        handler: async (response) => {
          const verifyRes = await fetch("http://localhost:4000/api/payment/verify-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();
          if (verifyData.success) alert("Payment Successful!");
          else alert("Payment verification failed!");
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6">
      {/* LEFT: Products */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">
          Shopping Cart <span className="text-sm text-gray-500">({items.length} Items)</span>
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {items.map(([id, qty]) => {
              const product = products.find((p) => p._id === id);
              if (!product) return null;

              return (
                <div key={id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex items-center gap-3">
                    {product.image?.data ? (
                      <img
                        src={`data:${product.image.contentType};base64,${btoa(
                          new Uint8Array(product.image.data.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            ""
                          )
                        )}`}
                        alt={product.name}
                        className="w-20 h-20 object-cover rounded"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-gray-500">
                        No Img
                      </div>
                    )}

                    <div>
                      <h3 className="font-semibold">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          className="px-2 bg-gray-200 rounded"
                          onClick={() => updateCartItemQty(id, qty - 1)}
                          disabled={qty <= 1}
                        >
                          -
                        </button>
                        <span>{qty}</span>
                        <button
                          className="px-2 bg-gray-200 rounded"
                          onClick={() => updateCartItemQty(id, qty + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right flex items-center gap-3">
                    <p className="font-semibold">₹{product.pricePerKg * qty}</p>
                    <button
                      onClick={() => removeFromCart(id)}
                      className="text-white border bg-green-400 px-2 py-1 rounded-md hover:text-white text-sm mt-1"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* RIGHT: Order Summary */}
      <div className="w-full lg:w-1/3 border rounded-lg p-4 shadow-sm h-fit">
        <h3 className="text-lg font-semibold mb-3">Order Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between"><span>Price</span><span>₹{subtotal}</span></div>
          <div className="flex justify-between"><span>Tax (2%)</span><span>₹{tax.toFixed(2)}</span></div>
          <div className="border-t pt-2 flex justify-between font-bold text-base"><span>Total Amount</span><span>₹{total.toFixed(2)}</span></div>
        </div>
        <button
          className="bg-green-400 text-white w-full mt-4 py-2 rounded hover:bg-green-700"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
