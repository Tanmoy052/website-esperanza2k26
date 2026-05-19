"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import { eventRegister } from "@/actions/eventRegister.action";
import CalenderBlank from "@/assets/icons/CalendarBlank.png";
import { staticEventsData } from "@/utils/static/events";
import { Saira_Condensed, Sedgwick_Ave_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

import img from "@/assets/images/ESPERANZA.png";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})
const saira_condensed = Saira_Condensed({
  subsets: ["vietnamese"],
  weight: ["700"],
});

function Card({
  eventName,
  eventDescription,
  uniqueId,
  userEmail,
  nonRegisterable=false,
}: {
  eventName: string;
  eventDescription: string;
  uniqueId:number;
  userEmail?: string;
  nonRegisterable?:boolean
}) {

  const router = useRouter()

  const handleRegisterForEvent = async ()=>{
    Swal.fire({
      title : "Registration is closed",
      icon : "info",
      text : "Please contact the event coordinators for more information",
    })
    // if(!userEmail){
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Oops...",
    //     text: "You need to login first!",
    //     confirmButtonText: "Okay",
    //   }).then(()=>{
    //     router.push("/login")
    //   })
    // }
    // const res = await eventRegister(uniqueId,userEmail)
    // if(res){
    //   if(res.error){
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: res.error,
    //       confirmButtonText: "Okay",
    //     })
    //   }else{
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success",
    //       text: res.message,
    //       confirmButtonText: "Okay",
    //     })
    //   }
    // }
  }

  const poster = staticEventsData.find(e=>e.uniqueId===uniqueId)?.poster
  const redirect = staticEventsData.find(e=>e.uniqueId===uniqueId)?.redirect

  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black/50 border-white/[0.1] w-auto sm:w-[18rem] md:w-[20rem] lg:w-[25rem] h-auto rounded-xl p-5 border-[1px]  ">
        <CardItem
          translateZ="50"
          className={`text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold text-white ${sedgwick.className}`}
        >
          {eventName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className={`${sedgwick.className} text-sm max-w-sm mt-2 text-neutral-300`}
        >
          {eventDescription}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={poster ? poster : img}
            className=" w-[250px] object-contain rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          <CardItem
            translateZ={20}
            as={Link}
            href={redirect? redirect : ""}
            className={`${sedgwick.className} px-4 py-2 rounded-xl text-white  text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600  shadow-md hover:from-purple-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-purple-500`}
          >
            Read More ...
          </CardItem>
          {
            nonRegisterable ? null : <button
            className={`${sedgwick.className} px-4 py-2 rounded-xl bg-white text-black  text-xs font-bold cursor-pointer`}

            onClick={handleRegisterForEvent}
          >
            Register
          </button>
          }
          
        </div>
      </CardBody>
    </CardContainer>
  );
}

export const CardDiv = ({
  reverseAlign = false,
  DateContent,
  eventName,
  eventDescription,
  uniqueId,
  userEmail,
  nonRegisterable,
}: {
  reverseAlign?: boolean;
  DateContent: any;
  eventName: string;
  eventDescription: string;
  uniqueId:number;
  userEmail?: string;
  nonRegisterable?:boolean
}) => {
  return (
    <div
      className={`flex flex-1 flex-col md:flex-row items-center justify-between gap-1 w-full cursor-pointer ${
        reverseAlign ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className=" text-end text-xl sm:text-3xl md:text-4xl lg:text-6xl  font-sans animate-pulse">
        <span className="flex gap-2 items-center">
          <Image
            src={CalenderBlank}
            alt=""
            className="w-[50px] sm:w-[75px] md:w-[100px]"
          />
          <span className="font-serif text-fuchsia-300">{DateContent}</span>
        </span>
      </div>
      <div className="flex-1 h-[1px] border-1 border-dashed opacity-45"></div>
      <div className="h-[20px] w-[20px] bg-white rounded-full opacity-50"></div>
      <Card
        eventDescription={eventDescription}
        eventName={eventName}
        uniqueId={uniqueId}
        userEmail={userEmail}
        nonRegisterable={nonRegisterable}
      />
    </div>
  );
};
