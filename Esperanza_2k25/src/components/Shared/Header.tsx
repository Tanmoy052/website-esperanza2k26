import Link from "next/link";
import Logo from "@/components/Shared/espLogoAnim";

import { auth } from "@/auth";
import Sidebar from "./Sidebar";
import Image from "next/image";
import logoTransparent from "@/assets/images/logoTransparent.png"

import { Sedgwick_Ave_Display,Katibeh } from "next/font/google";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})
const katibeh = Katibeh({
  subsets: ["arabic"],
  weight: ["400"],
  // style: "normal"
});

const Header = async() => {

  const session = await auth()

  const linkClass =
    "relative text-white hover:text-red-400 transition-colors duration-300";
  const underline =
    "absolute -bottom-1 left-0 w-0 h-[2px] bg-red-400 transition-all duration-300 group-hover:w-full";

  return (
    <header className="fixed top-0 h-[125px] w-full z-[200] bg-black/50 backdrop-blur-sm">
      <div className="flex justify-between items-center h-full px-4 md:px-10">
        <nav className="hidden md:flex flex-1 justify-around items-center gap-4">
          <Link
            href={"/"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            Home
            <span className={underline}></span>
          </Link>
          <Link
            href={"/team"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            Team
            <span className={underline}></span>
          </Link>
          <Link
            href={"/gallery"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            Gallery
            <span className={underline}></span>
          </Link>
          <Link
            href={"/sponsers"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            Sponsers
            <span className={underline}></span>
          </Link>
        </nav>
        <Link href={"/"}>
          <Logo />
        </Link>
        <nav className="hidden md:flex flex-1 justify-around items-center gap-4">
          <Link
            href={"/events/technical"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            Technical
            <span className={underline}></span>
          </Link>
          <Link
            href={"/events/cultural"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            Cultural
            <span className={underline}></span>
          </Link>
          <Link
            href={"/about"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            About
            <span className={underline}></span>
          </Link>
          <Link
            href={session?.user ? "/profile" : "/login"}
            className={`group ${linkClass} ${sedgwick.className} text-xl`}
            prefetch
          >
            {
              session?.user ? "Profile" : "Login"
            }
            <span className={underline}></span>
          </Link>
        </nav>
      </div>
      <Sidebar user={session?.user}/>
    </header>
  );
};

export default Header;
