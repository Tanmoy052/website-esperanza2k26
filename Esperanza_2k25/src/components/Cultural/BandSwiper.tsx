"use client";
import img from "@/assets/images/bandpicf.jpg";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const BandSwiper = () => {
  return (
    <Swiper
      spaceBetween={200}
      slidesPerView={1}
    >
      <SwiperSlide className="cursor-pointer">
        <Image src={img} alt="" height={800} width={800} className="m-auto" />
      </SwiperSlide>
      <SwiperSlide className="cursor-pointer">
        <Image src={img} alt="" height={800} width={800} className="m-auto" />
      </SwiperSlide>
    </Swiper>
  );
};

export default BandSwiper;
