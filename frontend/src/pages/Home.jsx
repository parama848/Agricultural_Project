// import React, { useRef, useEffect, useState } from "react";
// import slide_img1 from "../assets/slide_img1.jpg"
// import slide_img2 from "../assets/slide_img2.jpg";
// import Hero from "../components/Hero";
// import Title from "../components/Title";
// import LettuceList from "../components/LettuceList";
// import VegetableList from "../components/VegetableList";
// import NewsLetterBox from "../components/NewsLetterBox";

// const images = [slide_img1, slide_img2];

// const Home = () => {
//   const sliderRef = useRef();
//   const [currentIndex, setCurrentIndex] = useState(0);
  

//   const scrollToIndex = (index) => {
//     const width = sliderRef.current.offsetWidth;
//     if (sliderRef.current) {
//       sliderRef.current.scrollTo({
//         left: index * width,
//         behavior: "smooth",
//       });
//     }
//   };

//   useEffect(() => {
//     scrollToIndex(currentIndex);
//   }, [currentIndex]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <>
//     <div className="relative w-full overflow-hidden mt-3  sm:h-[250px] md:h-[300px] lg:h-[400px] xl:h-[500px]">
//       {/* Image Container */}
//       <div
//         ref={sliderRef}
//         className="h-[300px] flex overflow-x-hidden scroll-smooth snap-x snap-mandatory w-full  transition-all duration-1000"
//       >
//         {images.map((src, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-full h-full snap-center"
//           >
//             <img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//     <div className="mt-5">
//       <Hero />
//     </div>
//     <div>
//       <Title text1={"FRESH"} text2={"LETTUCE"} />
//       <LettuceList limit={4} />
//     </div>
//     <div>
//       <Title text1={"FRESH"} text2={"VEGETABLES"} />
//       <VegetableList limit={4} />
//     </div>
//     <div className="mt-6 py-10">
//       <NewsLetterBox />
//     </div>
//     </>
//   );
// };

// export default Home;

import React, { useRef, useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import slide_img1 from "../assets/slide_img1.jpg";
import slide_img2 from "../assets/slide_img2.jpg";
import Hero from "../components/Hero";

import NewsLetterBox from "../components/NewsLetterBox";
import FarmerCommunity from "../components/FarmerCommunity";
import Testimonials from "../components/Testimonials";
import SliderImage from "../components/SliderImage";


const Home = () => {
  // const sliderRef = useRef();
  // const [currentIndex, setCurrentIndex] = useState(0);

  const { token } = useContext(ShopContext);
  const navigate = useNavigate();

  // 🔒 Redirect to login if not logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  // const scrollToIndex = (index) => {
  //   const width = sliderRef.current.offsetWidth;
  //   if (sliderRef.current) {
  //     sliderRef.current.scrollTo({
  //       left: index * width,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   scrollToIndex(currentIndex);
  // }, [currentIndex]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev + 1) % images.length);
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div className="mt-5">
        <Hero />
      </div>
      <div className="mb-20">
        <SliderImage />
      </div>
     
   
   {/* farmer community */}
   {/* <div className="mt-10">
    <FarmerCommunity />
   </div> */}

  {/* testominala */}
   <div>
<Testimonials />
   </div>


      <div className="mt-6 py-10">
        <NewsLetterBox />
      </div>
    </>
  );
};

export default Home;

