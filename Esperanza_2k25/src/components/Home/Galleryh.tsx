"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import ploygon54 from "@/assets/images/Polygon54.png";
import ploygon52 from "@/assets/images/Polygon52.png";

import img2 from "@/assets/Gallery/cultural/band3.jpg";
import img1 from "@/assets/Gallery/tech/view.jpg";
import img3 from "@/assets/Gallery/cultural/singer1.jpg";
import img4 from "@/assets/Gallery/cultural/robo1.png";
import img11 from "@/assets/Gallery/cultural/band1.jpg";
import img6 from "@/assets/Gallery/cultural/drums.jpg";
import img7 from "@/assets/Gallery/tech/plane1.jpg";
import img8 from "@/assets/Gallery/tech/robo6.jpg";
import img10 from "@/assets/Gallery/tech/teacher.jpg";
import img9 from "@/assets/Gallery/cultural/band2.jpg";
import img5 from "@/assets/Gallery/tech/hackathon.jpg";
import img12 from "@/assets/Gallery/tech/sc.jpg";

import newTech1 from "@/assets/2k25/tech/20250423_112131.jpg.jpeg";
import newTech2 from "@/assets/2k25/tech/20250424_191114.jpg.jpeg";
import newTech3 from "@/assets/2k25/tech/20250424_191712.jpg.jpeg";
import newTech4 from "@/assets/2k25/tech/IMG20250422160553.jpg";
import newTech5 from "@/assets/2k25/tech/IMG20250422163329_01.jpg.jpeg";
import newTech6 from "@/assets/2k25/tech/IMG_0140.jpg";
import newTech7 from "@/assets/2k25/tech/IMG_0142.jpg";
import newTech8 from "@/assets/2k25/tech/IMG_0145.jpg";
import newTech9 from "@/assets/2k25/tech/IMG_0148.jpg";
import newTech10 from "@/assets/2k25/tech/IMG_0156.jpg";
import newTech11 from "@/assets/2k25/tech/IMG_0157.jpg";
import newTech12 from "@/assets/2k25/tech/IMG_0177.jpg";
import newTech13 from "@/assets/2k25/tech/IMG_9676.jpg";

import newCultural1 from "@/assets/2k25/cultural/IMG20250422123622.jpg";
import newCultural2 from "@/assets/2k25/cultural/IMG_9437.jpg";
import newCultural3 from "@/assets/2k25/cultural/IMG_9501.jpg";
import newCultural4 from "@/assets/2k25/cultural/IMG_9695.jpg";

import newMore1 from "@/assets/2k25/more/IMG20250422120003.jpg";
import newMore2 from "@/assets/2k25/more/IMG20250422122557.jpg";
import newMore3 from "@/assets/2k25/more/IMG_9439.jpg";
import newMore4 from "@/assets/2k25/more/IMG_9462.jpg";
import newMore5 from "@/assets/2k25/more/IMG_9468.jpg";
import newMore6 from "@/assets/2k25/more/IMG_9761.jpg";


const galleryImages = [
  { id: 100, img: newMore1, alt: "Esperanza 2k25", role: "2025" },
  { id: 101, img: newMore2, alt: "Esperanza 2k25", role: "2025" },
  { id: 102, img: newMore3, alt: "Esperanza 2k25", role: "2025" },
  { id: 103, img: newMore4, alt: "Esperanza 2k25", role: "2025" },
  { id: 104, img: newMore5, alt: "Esperanza 2k25", role: "2025" },
  { id: 105, img: newMore6, alt: "Esperanza 2k25", role: "2025" },

  { id: 200, img: newTech1, alt: "Tech 2k25", role: "2025" },
  { id: 201, img: newTech2, alt: "Tech 2k25", role: "2025" },
  { id: 202, img: newTech3, alt: "Tech 2k25", role: "2025" },
  { id: 203, img: newTech4, alt: "Tech 2k25", role: "2025" },
  { id: 204, img: newTech5, alt: "Tech 2k25", role: "2025" },
  { id: 205, img: newTech6, alt: "Tech 2k25", role: "2025" },
  { id: 206, img: newTech7, alt: "Tech 2k25", role: "2025" },
  { id: 207, img: newTech8, alt: "Tech 2k25", role: "2025" },
  { id: 208, img: newTech9, alt: "Tech 2k25", role: "2025" },
  { id: 209, img: newTech10, alt: "Tech 2k25", role: "2025" },
  { id: 210, img: newTech11, alt: "Tech 2k25", role: "2025" },
  { id: 211, img: newTech12, alt: "Tech 2k25", role: "2025" },
  { id: 212, img: newTech13, alt: "Tech 2k25", role: "2025" },

  { id: 300, img: newCultural1, alt: "Cultural 2k25", role: "2025" },
  { id: 301, img: newCultural2, alt: "Cultural 2k25", role: "2025" },
  { id: 302, img: newCultural3, alt: "Cultural 2k25", role: "2025" },
  { id: 303, img: newCultural4, alt: "Cultural 2k25", role: "2025" },

  { id: 1, img: img1, alt: "", role: "r" },
  { id: 2, img: img2, alt: "", role: "" },
  { id: 3, img: img3, alt: "", role: "" },
  { id: 4, img: img4, alt: "", role: "" },
  { id: 5, img: img5, alt: "", role: "" },
  { id: 6, img: img6, alt: "", role: "" },
  { id: 7, img: img7, alt: "", role: "" },
  { id: 8, img: img8, alt: "", role: "" },
  { id: 9, img: img9, alt: "", role: "" },
  { id: 10, img: img10, alt: "", role: "" },
  { id: 11, img: img11, alt: "", role: "" },
  { id: 12, img: img12, alt: "", role: "" }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const hoverVariants = {
  hover: {
    scale: 1.03,
    boxShadow: "0 20px 25px -10px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.6 }
  }
};

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.2,
    once: false,
    margin: "0px 0px -100px 0px"
  });

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 md:py-60 mt-20 sm:mt-15 md:mt-40 lg:mt-125 px-6 sm:px-10 lg:px-12" 
    >
      <div className="relative inline-block mb-8 mx-auto w-full">
        <motion.h1 
          className="text-7xl md:text-8xl font-bold text-gray-200 text-center relative z-10 katibeh-regular"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Memories
        </motion.h1>

        <motion.svg
          className="absolute top-7 left-4 w-full h-full katibeh-regular"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewBox="0 0 500 100"
        >
          
          <text
            x="50%"
            y="80%"
            textAnchor="middle"
            className="text-8xl md:text-8xl"
            fill="transparent"
            stroke="#999999"
            strokeWidth="2"
            strokeDasharray="1000"
            strokeDashoffset={isInView ? 0 : 1000}
            style={{
              transition: "stroke-dashoffset 1.5s ease-in-out"
            }}
          >
            Memories
          </text>
        </motion.svg>
      </div>

      <div className="absolute z-[-1] md:right-[-2]">
        <Image 
        src={ploygon54} 
        alt=''
        width={700}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 mb-8 mt-40" 
      >
        {galleryImages.map((item, idx) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            whileTap={{ scale: 0.98 }}
            className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"

              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-5"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.4 }
                }}
              >
                <h3 className="text-white font-medium text-lg drop-shadow-md">{item.alt}</h3>
                <p className="text-white/90 text-sm drop-shadow-md">{item.role}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute z-[-1] -left-2 -translate-y-160
">
        <Image 
        src={ploygon52} 
        alt=''
        width={900}
        />
      </div>
    </section>
  );
}


