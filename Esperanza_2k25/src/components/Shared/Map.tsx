"use client";

import { Katibeh,Sedgwick_Ave_Display } from "next/font/google";
import MapImage from "@/assets/images/map-image.png";
import Cgec from "@/assets/images/CGEC-Logo-colorful.jpg";
import Image from "next/image";

const katibeh = Katibeh({
    subsets: ["arabic"],
    weight: ["400"],
  });
  const sedgwick = Sedgwick_Ave_Display({
    subsets: ["latin"],
    weight: ["400"],
  })
const Map = () => {
  const locationInfo =
    "https://www.google.com/maps/place/Cooch+Behar+Government+Engineering+College/data=!4m2!3m1!1s0x0:0xe4952b5891bb2389?sa=X&ved=1t:2428&ictx=111";
  return (
    <>
      <div className="mb-8">
        <h3
          className={`${sedgwick.className} text-4xl xl:text-5xl mb-6 relative inline-block`}
        >
          ADDRESS
          <span className="absolute bottom-0 left-0 w-full h-1 bg-current"></span>
        </h3>
        <p className="text-lg xl:text-xl">
          <a
            href={locationInfo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${sedgwick.className} text-blue-400 hover:underline `}
          >
            Cooch Behar Government Engineering College
            <br /> Vill-Harinchowrah, P.O-Ghughumari
            <br /> Dist-Cooch Behar, West Bengal, PIN-736170
          </a>
        </p>
      </div>
      <div onClick={() => window.open(locationInfo)} className="mt-8 lg:mt-12">
        <div className="bg-gray-900 hover:cursor-pointer rounded-3xl overflow-hidden border-2 border-white/20 h-[280px] lg:h-[350px] w-full relative">
          <Image src={MapImage} alt="Map Image" className="object-cover" />
          <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 border-2 border-sky-500 animate-ping"></div>
            <Image
              src={Cgec}
              alt="CGEC Logo"
              className="size-20 object-contain p-1 bg-white rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
