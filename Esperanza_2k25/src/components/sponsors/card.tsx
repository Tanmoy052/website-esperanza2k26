import React from 'react';
import Image from 'next/image';
import bg from "@/assets/background/HexagonWhite.png";
import { Katibeh } from "next/font/google";
import { StaticImageData } from 'next/image';
import kfc from "@/assets/sponsors/KFC.jpg"
import devine from "@/assets/sponsors/Devine.jpg"
import torsha from "@/assets/sponsors/Torsha.jpg"
import cocacola from "@/assets/sponsors/cocacola.png"
export interface CardData {
  id: number;
  title: string;
  imageUrl: StaticImageData;
  redirectURL?: string;
}

const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
});
export const cards: CardData[] = [
  {
    id: 1,
    title: "KFC",
    imageUrl: kfc,
    redirectURL:"https://online.kfc.co.in/"
  },
  {
    id: 2,
    title: "Coca Cola",
    imageUrl: cocacola,
    redirectURL:"https://www.coca-colacompany.com/"
  },
  {
    id: 3,
    title: "Devine",
    imageUrl: devine,
    redirectURL:"https://www.instagram.com/devinefamilysalon/"
  },
  {
    id: 4,
    title: "Torsha Cafeteria",
    imageUrl: torsha,
    redirectURL:"https://www.facebook.com/p/Torsha-Cafeteria-61553648939828/"
  }
  // {
  //   id: 5,
  //   title: "Forest Retreat",
  //   imageUrl: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80&w=500"
  // },
  // {
  //   id: 6,
  //   title: "Cultural Festival",
  //   imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=500"
  // },
  // {
  //   id: 7,
  //   title: "Snowboard Paradise",
  //   imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500"
  // },
  // {
  //   id: 8,
  //   title: "Lakeside Camping",
  //   imageUrl: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=500"
  // },
  // {
  //   id: 9,
  //   title: "Historical Tour",
  //   imageUrl: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=500"
  // },
  // {
  //   id: 10,
  //   title: "Culinary Journey",
  //   imageUrl: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=500"
  // }
];{/*rgba(124,58,237,0.7)*/}

const Card: React.FC<CardData> = ({ title, imageUrl, redirectURL }) => {
  const handleclick=()=>{
    window.open(redirectURL, "_blank" );
  }
  return (
    <div
    onClick = {handleclick}
     className="group bg-gray-650 rounded-lg sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden transform transition-all duration-350 hover:shadow-[0_5px_20px_rgba(128,2,196,0.7)] hover:-translate-y-1 sm:hover:-translate-y-2 w-full hover:cursor-pointer">
      {/* Image Container */}
      
      <div className="relative aspect-[3/4] sm:aspect-[4/3] overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title}
          className="w-full h-full transform transition-transform duration-500 group-hover:scale-105 sm:group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 via-gray-400/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-350"/>
      </div>
      
      {/* Title Section */}
      <div className="relative p-3 sm:p-6 transform transition-all duration-350 overflow-hidden h-20 sm:h-28">
        <Image
          src={bg}
          alt="Card background"
          fill
          className="object-cover -z-10"
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-gray-200 to-[rgba(128,2,196,1)] transform scale-0 group-hover:scale-100 transition-transform duration-350 rounded-full"/>
        
        <h3 className={`${katibeh.className} relative text-sm sm:text-xl font-extrabold text-center text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-r from-gray-100 to-[rgba(128,2,196,1)] group-hover:bg-clip-text transition-all duration-350 py-1 sm:py-2`}>
          {title}
        </h3>
        
        <div className="absolute bottom-0 left-0 w-full h-[1px] sm:h-[2px] bg-gradient-to-r from-gray-300 via-[rgba(128, 2, 196, 1)] to-gray-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-350"/>
      </div>
    </div>
  );
};

export const CardContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full px-3 py-4 sm:px-4 sm:py-6">
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        {children}
      </div>
    </div>
  );
};

export default Card;

//flex-cols-1 xs:flex-cols-2 sm:flex-cols-2 md:flex-cols-3 lg:flex-cols-4 xl:flex-cols-5