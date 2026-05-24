"use client";

import { logout } from "@/actions/logout.action";
import { LogOut, Loader2 } from "lucide-react";
import { Sedgwick_Ave_Display } from "next/font/google";
import { useRouter } from "next/navigation";
import customSwal from "@/utils/swal";
import { useState } from "react";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
})

const LogOutButton = () => {

  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = async () => {
    setIsLoading(true);
    const response = await logout();
    setIsLoading(false);
    customSwal.fire({
      icon: response.error ? "error" : "success",
      title: response.message,
    }).then(()=>{
      router.refresh()
      router.push("/login")
    })
  };

  return (
    <form action={handleLogOut}>
      <button
        type="submit"
        disabled={isLoading}
        className={`text-white flex items-center hover:text-red-400 cursor-pointer ${sedgwick.className} disabled:opacity-70 disabled:cursor-not-allowed`}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogOut className="mr-2 h-4 w-4" />}
        <span className="hidden sm:inline">Log Out</span>
      </button>
    </form>
  );
};

export default LogOutButton;
