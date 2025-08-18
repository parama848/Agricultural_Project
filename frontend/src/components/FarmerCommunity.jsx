import React, { useEffect, useRef } from "react";
import farmer_img1 from '../assets/farmer_img1.png'
import farmer_img2 from '../assets/farmer_img2.png'
import farmer_img3 from '../assets/farmer_img3.png'
import farmer_img4 from '../assets/farmer_img4.png'
import Title from "./Title";

const farmers = [
  {
    name: "SURAJ KAILAS MULAY",
    farm: "Mulay Farms",
    location: "Pune, Maharashtra",
    image: [farmer_img1]
  },
  {
    name: "PAVITRAK FARMER PRODUCER COMAPANY",
    farm: "Pavitrak Farmer Producer Company",
    location: "Pune, Maharashtra",
    image:[farmer_img2]
  },
  {
    name: "WALE KIRAN ARJUN",
    farm: "Wale Farms",
    location: "Ahilyanagar, Maharashtra",
    image: [farmer_img3]
  },
  {
    name: "SANTOSH SHIVAJI GADAKH",
    farm: "Athave Rasta",
    location: "NASHIK, Maharashtra",
    image: [farmer_img4]
  },
  // {
  //   name: "SANTOSH SHIVAJI GADAKH",
  //   farm: "Athave Rasta",
  //   location: "NASHIK, Maharashtra",
  //   image: [farmer_img4]
  // },
  // {
  //   name: "SANTOSH SHIVAJI GADAKH",
  //   farm: "Athave Rasta",
  //   location: "NASHIK, Maharashtra",
  //   image: [farmer_img4]
  // },
  // {
  //   name: "SANTOSH SHIVAJI GADAKH",
  //   farm: "Athave Rasta",
  //   location: "NASHIK, Maharashtra",
  //   image: [farmer_img4]
  // },
];

export default function FarmerCarousel() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const scrollAmount = container.offsetWidth;

        if (
          container.scrollLeft + scrollAmount >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden ">
        <div className="mb-10">
            <Title text1={"GreenChain"} text2={"Community"} />
        </div>
      <div
        ref={sliderRef}
        className="flex overflow-x-auto no-scrollbar scroll-smooth space-x-4 px-4 py-6"
      >
        {farmers.map((farmer, index) => (
          <div
            key={index}
            className="min-w-[250px] max-w-[250px] bg-white rounded-xl border shadow-md p-4 flex flex-col items-center shrink-0"
          >
            <img
              src={farmer.image}
              alt={farmer.name}
              className="w-24 h-24 object-cover rounded-full border-4 border-green-400 shadow -mt-10  mb-4"
            />
            <h3 className="text-center font-bold text-gray-800 text-md uppercase">
              {farmer.name}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{farmer.farm}</p>
            <p className="text-gray-500 text-sm">({farmer.location})</p>
            <button className="mt-4 bg-white border border-green-200  text-gray-600 hover:text-white px-4 py-2 rounded-full text-sm  hover:bg-green-500 transition">
              View My Story
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
