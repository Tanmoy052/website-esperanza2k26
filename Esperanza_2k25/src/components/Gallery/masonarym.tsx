"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import newMore1 from "@/assets/2k25/more/IMG20250422120003.jpg";
import newMore2 from "@/assets/2k25/more/IMG20250422122557.jpg";
import newMore3 from "@/assets/2k25/more/IMG_9439.jpg";
import newMore4 from "@/assets/2k25/more/IMG_9462.jpg";
import newMore5 from "@/assets/2k25/more/IMG_9468.jpg";
import newMore6 from "@/assets/2k25/more/IMG_9761.jpg";

const galleryItems = [
  {
    id: 100,
    src: newMore1,
    span: "col-span-1 sm:col-span-1"
  },
  {
    id: 101,
    src: newMore2,
    span: "col-span-2 sm:col-span-2"
  },
  {
    id: 102,
    src: newMore3,
    span: "col-span-1 sm:col-span-1"
  },
  {
    id: 103,
    src: newMore4,
    span: "col-span-2 sm:col-span-2"
  },
  {
    id: 104,
    src: newMore5,
    span: "col-span-2 sm:col-span-2"
  },
  {
    id: 105,
    src: newMore6,
    span: "col-span-2 sm:col-span-2"
  }
];

export default function MasonryGallerym() {
  return (
    <div className="p-2 sm:p-4">
      <div className="grid grid-cols-4 gap-2 sm:gap-4 mx-auto max-w-7xl">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            className={`relative ${item.span} aspect-[4/3] group`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="relative h-full w-full overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 border-2 border-neutral-800 z-10 rounded-lg transition-colors duration-300 group-hover:border-white" />
              <Image
                src={item.src}
                alt={`Gallery item ${item.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}