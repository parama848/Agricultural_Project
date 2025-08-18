import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div className="about sm:px-[2vm]">
      {/* About Us Title */}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* Image and Mission Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p> To support rural farmers by giving them better market access.</p>
          <p>To deliver farm-fresh vegetables and greens directly to buyers.</p>
          <p className="text-gray-800 font-semibold">Our Mission</p>
          <p>To build a sustainable, transparent, and trust-driven food ecosystem</p>
        </div>
      </div>

      {/* Why Choose Us Title */}
      <div className="text-4xl py-4 text-start">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      {/* Choose Us Cards */}
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-1 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">Direct sourcing from trusted local farmers.Handpicked, fresh, chemical-free produce.Transparent and safe harvesting practices</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-1 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">Easy online ordering for individuals & businesses.Smart delivery based on your location.Wide variety of vegetables & greens in one place</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex-1 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
           Fast, friendly support for all customer types.Real-time order tracking and flexible payments.Dedicated help from order to delivery
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
