import RadialBgRed from "@/assets/background/RadialBgRed.png";
import TeamBg from "@/assets/images/Group 163057[1].png";
import meetOurDevelopers from "@/assets/images/meetOurDevelopers.png";
import Hexagon from "@/assets/images/Hexagon.png";

import Container from "@/components/Shared/Container";

import { TeamMemebrsCard } from "@/components/Teams/TeamMembersCard";
import { teamMembers } from "@/utils/static/crew";
import { Katibeh } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const sedgwick = Katibeh({
  subsets: ["latin"],
  weight: "400",
});

// const testimonials = [
//   {
//     quote:
//       "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
//     name: "Sarah Chen",
//     designation: "Product Manager at TechFlow",
//     src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
//     name: "Michael Rodriguez",
//     designation: "CTO at InnovateSphere",
//     src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
//     name: "Emily Watson",
//     designation: "Operations Director at CloudScale",
//     src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
//     name: "James Kim",
//     designation: "Engineering Lead at DataPro",
//     src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     quote:
//       "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
//     name: "Lisa Thompson",
//     designation: "VP of Technology at FutureNet",
//     src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

const Team = () => {
  return (
    <div className="mt-[125px] min-h-[90vh] relative overflow-hidden">
      <Image
        src={RadialBgRed}
        alt="background"
        className="opacity-20 sm:opacity-40 md:opacity-55 lg:opacity-65 absolute left-1/2 transform -translate-x-1/2 z-0"
      />
      <Image src={Hexagon} alt="hexagon decoration" className="absolute z-0" />

      <div className="flex flex-col items-center py-10 relative z-20">
        <Container>
          <div className="flex justify-center relative z-30 w-full max-w-[700px] mx-auto">
            <Image
              src={TeamBg}
              alt="about us"
              className="object-contain"
              priority
            />
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex justify-center relative z-50">
          <Link href="/developers" passHref legacyBehavior className="">
            <a target="_blank" className="inline-block w-[90%] md:max-w-[300px] pb-15 m-auto animate-pulse duration-200 hover:animate-none">
              <Image
                src={meetOurDevelopers}
                alt=""
                width={270}
                className="pt-[20] w-full m-auto hover:scale-108 transition-transform duration-300 cursor-pointer"
              />
            </a>
          </Link>
        </div>
      </Container>
      <div className="flex justify-between items-center">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Meet Our Leads
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex justify-center">
          <AnimatedTestimonials testimonials={teamMembers.filter(m=>m.lead)}/>
        </div>
      </Container>

      <div className="flex justify-between items-center">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Management Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("management"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      {/* Cards Section */}
      <div className="flex justify-between items-center pt-10">
        {/* Technical */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Technical Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("technical"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  {<TeamMemebrsCard member={m} />}
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Cultural */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Cultural Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("cultural"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  {<TeamMemebrsCard member={m} />}
                </div>
              );
            })}
        </div>
      </Container>

      

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          PR Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("pr"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Sponsor Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("sponsor"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  {<TeamMemebrsCard member={m} />}
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Finance Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("finance"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Audit Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("audit"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Content Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("content"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Decoration Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("decoration"))
            .map((m, j) => {
              return (
                <div className="overflow-hidden" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      <div className="flex justify-between items-center pt-10">
        

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Hospitality Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("hospitality"))
            .map((m, j) => {
              return (
                <div className="" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>

      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Security Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("security"))
            .map((m, j) => {
              return (
                <div className="" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>
      <div className="flex justify-between items-center pt-10">
        {/* Sponsor */}

        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
        <h1
          className={`${sedgwick.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-center `}
        >
          Stage Management Team
        </h1>
        <div className="md:h-[80px] md:w-[200px] lg:h-[100px] lg:w-[350px] bg-white"></div>
      </div>
      <Container>
        <div className="flex gap-3 justify-center flex-wrap w-full mt-15">
          {teamMembers
            .filter((m) => m.category.includes("stage management"))
            .map((m, j) => {
              return (
                <div className="" key={j}>
                  <TeamMemebrsCard member={m} />
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default Team;
