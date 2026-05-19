import HexagonWhite from "@/assets/background/HexagonWhite.png";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import BandPic from "@/assets/images/BandPic.png";
import CulturalHeading from "@/assets/images/CulturalHeading.png";
import Hexagon from "@/assets/images/Hexagon.png";
import RevolutionImg from "@/assets/images/RevolutionImg.png";
import Container from "@/components/Shared/Container";
import Image from "next/image";

import { fetchAllEvents } from "@/actions/fetch.action";
import { auth } from "@/auth";
import { CardDiv } from "@/components/Shared/Card";
import { Katibeh, Sedgwick_Ave_Display } from "next/font/google";

import img from "@/assets/images/banner.png"; // Temp
import BandSwiper from "@/components/Cultural/BandSwiper";

const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
});

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})

const Cultural = async() => {
  
  const events = await fetchAllEvents("cultural")
  const session = await auth()

  return (
    <div className="mt-[125px] min-h-[90vh] relative">
      <Image
        src={RadialBgRed}
        alt=""
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute  left-[50%] translate-x-[-50%]  z-[-1]"
      />
      <Image src={Hexagon} alt="" className="absolute " />
      <div className="flex justify-center relative">
        <Container>
          <Image
            src={CulturalHeading}
            alt=""
            className="w-[400px] sm:w-[500px] md:w-[800px] lg:w-[1000px]"
          />
        </Container>
      </div>
      <div className="flex justify-between items-center">

        {/* Band at a glance */}
        
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Band at a glance
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <BandSwiper/>
      {/* <div className="mt-4 md:mt-10 relative">
        <Image src={BandPic} alt="" className="object-cover" />
        <Image src={RevolutionImg} alt="" className="absolute bottom-4 left-[50%] translate-x-[-50%]" />
        <div className="bg-red-600 w-full h-[80%] absolute bottom-0 z-[-1]" />
      </div> */}
      <Container>
        <div className="min-h-screen relative">
          <Image
            src={HexagonWhite}
            alt=""
            className="absolute left-[50%] translate-x-[-50%] opacity-50"
          />
          <Image
            src={Hexagon}
            alt=""
            className="absolute top-[20%] left-[25%] translate-x-[-50%] opacity-80"
          />
          <Image
            src={HexagonWhite}
            alt=""
            className="absolute top-[45%] left-[40%] translate-x-[-50%] opacity-70"
          />
          <div className="bg-white/50 h-full w-[1px] absolute top-0 left-[-8px] md:left-[50%] md:translate-x-[-50%] animate-pulse" />
          <div className=" flex flex-col gap-1">
          {events?.map((event, i) => {
              if (i % 2 === 0) {
                return (
                  <CardDiv
                    reverseAlign
                    eventName={event.eventName}
                    eventDescription={event.eventDescription}
                    key={i}
                    DateContent={event.eventDate}
                    uniqueId={event.uniqueId!}
                    userEmail={session?.user?.email as string}
                    nonRegisterable={event.nonRegisterable}
                  />
                );
              } else {
                return (
                  <CardDiv
                    eventName={event.eventName}
                    eventDescription={event.eventDescription}
                    key={i}
                    DateContent={event.eventDate}
                    uniqueId={event.uniqueId!}
                    userEmail={session?.user?.email as string}
                    nonRegisterable={event.nonRegisterable}
                  />
                );
              }
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cultural;