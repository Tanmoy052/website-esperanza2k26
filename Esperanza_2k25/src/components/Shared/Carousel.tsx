"use client";

import { Carousel } from "@/components/ui/carousel";
import { StaticImageData } from "next/image";
export function CarouselCompoment({
  developers,
}: {
  developers: {
    name: string;
    avatar: StaticImageData;
    profile: string;
    role?: string;
    year: string;
    department: string;
    socials : {
      handler : string;
      link : string
    }[]
  }[];
}) {
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={developers} />
    </div>
  );
}
