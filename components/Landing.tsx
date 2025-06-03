import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <div
      className="min-h-screen w-full m-0 bg-cover bg-center text-white font-sans relative overflow-hidden z-0"
      style={{ backgroundImage: `url("/heropageImage/RandomCar.jpg")` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      <div className="relative px-16 py-8 flex flex-col items-end justify-end h-screen z-20">
        <div className="flex gap-10 text-2xl font-semibold space-y-4">
          <div className="border-r-2 pr-10">
            <p className="text-4xl text-gray-200">XX kW</p>
            <p className="text-sm text-gray-400">
              Maximum
              <br />
              Motor Power
            </p>
          </div>
          <div className="border-r-2 pr-10">
            <p className="text-4xl text-gray-200">XX KM</p>
            <p className="text-sm text-gray-400">
              Run Maximum Distance
              <br />
              Per Charge/Per Time
            </p>
          </div>
          <div className="pr-10 h-fit">
            <p className="text-4xl text-gray-200">XX mm</p>
            <p className="text-sm text-gray-400">Ground Clearance</p>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8">
          The product featured is for reference only, and the appearance,
          colour, features and configuration may differ from the final delivered
          product. Please refer to the actual product for details.
        </p>
      </div>
    </div>
  );
};

export default Landing;
