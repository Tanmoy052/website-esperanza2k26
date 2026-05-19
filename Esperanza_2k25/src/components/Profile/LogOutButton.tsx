"use client";

import { logout } from "@/actions/logout.action";
import { LogOut } from "lucide-react";
import { Sedgwick_Ave_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})

const LogOutButton = () => {

  const router = useRouter()

  const handleLogOut = async () => {
    const response = await logout();
    Swal.fire({
      icon: response.error ? "error" : "success",
      title: response.message,
    }).then(()=>{
      router.refresh()
    })
  };

  return (
    <form action={handleLogOut}>
      <button
        type="submit"
        className={`text-white flex items-center hover:text-red-400 cursor-pointer ${sedgwick.className}`}
      >
        <LogOut className="mr-2 h-4 w-4" />
        <span className="hidden sm:inline">Log Out</span>
      </button>
    </form>
  );
};

export default LogOutButton;
