import React, { useState } from 'react';
import { assets } from '../assets/assets';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({ token }) => {
  const [image, setImage] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pricePerKg, setPricePerKg] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [availableQuantityKg, setAvailableQuantityKg] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("pricePerKg", pricePerKg);
      formData.append("category", category);
      formData.append("availableQuantityKg", availableQuantityKg);
      formData.append("image", image);

      const response = await axios.post(`${backendUrl}/api/products/add`, formData, {
        headers: {
          token
        }
      });

      if (response.data.success) {
        toast.success("Product added successfully!");
        setName(""); 
        setDescription(""); 
        setImage(false); 
        setPricePerKg("");
        setAvailableQuantityKg(""); 
        setCategory("Vegetables");
      } else {
        toast.error(response.data.message || "Failed to add product");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col w-full items-start gap-4 p-6">
      <h2 className="text-xl font-semibold text-center w-full">Add New Product</h2>

      <div>
        <p>Upload Image</p>
        <label htmlFor="image-upload">
          <img
            className="w-24 h-24 object-cover border cursor-pointer"
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload Preview"
          />
        </label>
        <input
          id="image-upload"
          type="file"
          hidden
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
      </div>

      <input className="input px-3 py-2 outline-green-400 lg:w-[40%] w-full" placeholder="Product Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <textarea className="input px-3 py-2 outline-green-400 lg:w-[40%] w-full" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input className="input px-3 py-2 outline-green-400 lg:w-[40%] w-full" placeholder="Price (₹/kg)" type="number" value={pricePerKg} onChange={(e) => setPricePerKg(e.target.value)} required />
      <input className="input px-3 py-2 outline-green-400 lg:w-[40%] w-full" placeholder="Available Quantity (kg)" type="number" value={availableQuantityKg} onChange={(e) => setAvailableQuantityKg(e.target.value)} required />

      <select className="input px-3 py-2 outline-green-400 lg:w-[40%] w-full" value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="Vegetables">Vegetables</option>
        <option value="Lettuce">Lettuce</option>
      </select>

      <button className="bg-green-500 text-white px-6 py-2.5  hover:bg-green-600">Add Product</button>
    </form>
  );
};

export default Add;
