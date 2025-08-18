

// import React, { useState, useContext } from "react";
// import { ShopContext } from "../context/shopContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom"; // ✅ Correct way to use navigate

// const Login = () => {
//   const { setToken, backendUrl } = useContext(ShopContext);
//   const navigate = useNavigate();

//   const [currentState, setCurrentState] = useState("Login");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();

//     try {
//       if (currentState === "Sign Up") {
//         const response = await axios.post(`${backendUrl}/api/user/register`, {
//           name,
//           email,
//           password,
//         });

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//           toast.success("Registered successfully!");
//           navigate("/");
//         } else {
//           toast.error(response.data.message);
//         }
//       } else {
//         const response = await axios.post(`${backendUrl}/api/user/login`, {
//           email,
//           password,
//         });

//         if (response.data.success) {
//           setToken(response.data.token);
//           localStorage.setItem("token", response.data.token);
//           toast.success("Logged in successfully!");
//           navigate("/");
//         } else {
//           toast.error(response.data.message);
//         }
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="w-[90%] sm:max-w-96 m-auto mt-14">
//       {/* ✅ Login / Signup form only, no logout UI here */}
//       <form
//         onSubmit={onSubmitHandler}
//         className="flex flex-col gap-4 text-gray-800 border p-5 rounded-lg"
//       >
//         <div className="inline-flex items-center gap-2 mb-2">
//           <p className="text-3xl pl-28">{currentState}</p>
//         </div>

//         {currentState === "Sign Up" && (
//           <input
//             onChange={(e) => setName(e.target.value)}
//             value={name}
//             type="text"
//             className="w-full px-3 py-2 border border-green-400 outline-none"
//             placeholder="Name"
//             required
//           />
//         )}

//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           type="email"
//           className="w-full px-3 py-2 border border-green-400 outline-none"
//           placeholder="Email"
//           required
//         />

//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           value={password}
//           type="password"
//           className="w-full px-3 py-2 border border-green-400 outline-none"
//           placeholder="Password"
//           required
//         />

//         <div className="flex justify-between text-sm">
//           <p className="cursor-pointer">Forgot your password?</p>
//           <p
//             onClick={() =>
//               setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
//             }
//             className="cursor-pointer text-green-400"
//           >
//             {currentState === "Login" ? "Create account" : "Login Here"}
//           </p>
//         </div>

//         <button className="bg-green-400 text-white font-light px-8 py-2 mt-4">
//           {currentState === "Login" ? "Sign In" : "Sign Up"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from "react";
import { ShopContext } from "../context/shopContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setToken, backendUrl } = useContext(ShopContext);
  const navigate = useNavigate();

  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const url =
        currentState === "Sign Up"
          ? `${backendUrl}/api/user/register`
          : `${backendUrl}/api/user/login`;

      const payload =
        currentState === "Sign Up"
          ? { name, email, password }
          : { email, password };

      const response = await axios.post(url, payload);

      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        toast.success(`${currentState} successful!`);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };


  return (
  <div className="relative h-screen flex justify-center items-center overflow-hidden">
  {/* 🔹 Background Image Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
    style={{
      backgroundImage: `url('/hero_img.png')`, // 👈 your image here
    }}
  ></div>

  {/* 🔹 Glass Login Form (Front Layer) */}
  <div className="relative z-10 w-[90%] sm:max-w-96 bg-white/30 backdrop-blur-md border border-white/20 p-6 rounded-lg shadow-lg">
    <form onSubmit={onSubmitHandler} className="flex flex-col gap-4 text-gray-800 ">
      <p className="text-3xl text-center">{currentState}</p>

      {currentState === "Sign Up" && (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
          className="px-4 placeholder:text-sm py-2  rounded-3xl outline-none bg-white bg-opacity-70"
        />
      )}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="px-4 py-2 placeholder:text-sm  rounded-3xl outline-none bg-white bg-opacity-70"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        className="px-4 placeholder:text-sm py-2 rounded-3xl outline-none bg-white bg-opacity-70"
      />

      <div className="flex justify-between text-xs px-2 text-black">
        <p className="cursor-pointer">Forgot your password?</p>
        <p
          onClick={() =>
            setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
          }
          className="cursor-pointer text-gray-50"
        >
          {currentState === "Login" ? "Create account" : "Login Here"}
        </p>
      </div>
      <button className="rounded-3xl bg-white text-green-400 hover:bg-green-400 hover:text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>

    </form>
  </div>
</div>

  );
};

export default Login;
