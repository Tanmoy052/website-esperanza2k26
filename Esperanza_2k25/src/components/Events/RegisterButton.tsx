"use client";

import { eventRegister } from "@/actions/eventRegister.action";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const RegisterButton = ({
  uniqueId,
  userEmail,
}: {
  uniqueId: number;
  userEmail?: string;
}) => {
  const router = useRouter();

  const handleRegisterForEvent = async () => {
    Swal.fire({
      title: "Registration is closed",
      icon: "info",
      text: "Please contact the event coordinators for more information",
    });
    // if (!userEmail) {
    //   Swal.fire({
    //     icon: "warning",
    //     title: "Oops...",
    //     text: "You need to login first!",
    //     confirmButtonText: "Okay",
    //   }).then(() => {
    //     router.push("/login");
    //   });
    // }
    // const res = await eventRegister(uniqueId, userEmail);
    // if (res) {
    //   if (res.error) {
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: res.error,
    //       confirmButtonText: "Okay",
    //     });
    //   } else {
    //     Swal.fire({
    //       icon: "success",
    //       title: "Success",
    //       text: res.message,
    //       confirmButtonText: "Okay",
    //     }).then(()=>{
    //         router.refresh()
    //     })
    //   }
    // }
  };

  return (
    <form action={handleRegisterForEvent}>
      <Button
        type="submit"
        className="self-start bg-pink-600 hover:bg-pink-800 duration-100 cursor-pointer"
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterButton;
