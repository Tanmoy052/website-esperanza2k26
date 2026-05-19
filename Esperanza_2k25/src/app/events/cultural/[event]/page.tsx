import { fetchEventByUniqueId } from "@/actions/fetch.action";
import RadialBgRed from "@/assets/background/RadialBgRed.png";
import { auth } from "@/auth";
import RegisterButton from "@/components/Events/RegisterButton";
import Container from "@/components/Shared/Container";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { convertTo12HourFormat } from "@/utils/functions/timeConversion";
import { staticEventsData } from "@/utils/static/events";
import { Calendar, TimerIcon } from "lucide-react";
import { Sedgwick_Ave } from "next/font/google";
import Image from "next/image";

const sedgwick = Sedgwick_Ave({
  weight: "400",
  subsets: ["latin-ext"],
});

const page = async ({ params }: any) => {
  const session = await auth();

  const uniqueId = (await params).event;

  const event = await fetchEventByUniqueId(uniqueId);
  const poster = staticEventsData.find((e) => e.uniqueId == uniqueId)?.poster;

  const words = event?.eventName.split(" ").map((w) => ({ text: w }));

  return (
    <div className={`mt-[125px] min-h-screen relative`}>
      <Image
        src={RadialBgRed}
        alt=""
        className="opacity-20 sm:opacity-40 md:opacity-55 absolute left-[50%] translate-x-[-50%]  z-[-1]"
      />
      <Container>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          <Image
            src={poster!}
            alt={event?.eventName || ""}
            className="w-full sm:w-80 md:w-96"
          />
          <div className="flex-1 flex-col gap-5 items-center">
            <TypewriterEffectSmooth words={words!} />
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <Calendar />
                <span>{event?.eventDate}</span>
              </div>
              <div className="flex gap-1 items-center">
                <TimerIcon />
                <span>{convertTo12HourFormat(event?.eventStartTime)}</span>
              </div>
              <div className="text-xl">{event?.eventDescription}</div>
              <div className="font-bold text-pink-600 ">
                {!event?.nonRegisterable &&
                  `Total Registrations : ${event?.participants.length}`}
              </div>
              {!event?.nonRegisterable && (
                <RegisterButton
                  uniqueId={uniqueId}
                  userEmail={session?.user?.email as string}
                />
              )}
              <div className="flex flex-col gap-2">
                <span className="font-bold text-2xl">
                  {event?.leads && event.leads.length > 1
                    ? "Event Leads"
                    : "Event Lead"}
                </span>
                <div className="flex flex-wrap gap-2">
                  {event?.leads.map((l, i) => (
                    <div
                      className="px-4 py-3 bg-black/30 backdrop-blur-sm"
                      key={i}
                    >
                      <div>{l.name && l.name}</div>
                      <div>
                        {l.year && l.year} {l.department && l.department}
                      </div>
                      <div>{l.contact && l.contact}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
