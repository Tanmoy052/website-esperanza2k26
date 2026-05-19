import {
  fetchRegisteredEvents,
  fetchUserByEmail,
} from "@/actions/fetch.action";
import { auth } from "@/auth";
import LogOutButton from "@/components/Profile/LogOutButton";
import ProfileForm from "@/components/Profile/ProfileForm";
import Container from "@/components/Shared/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, UserCircle2 } from "lucide-react";
import { Karla, Sedgwick_Ave_Display } from "next/font/google";
const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});
import Link from "next/link";
import { redirect } from "next/navigation";

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default async function Profile() {
  const session = await auth();
  if (!session?.user?.email) redirect("/login");
  const user = await fetchUserByEmail(session?.user?.email as string);
  const registeredEvents = await fetchRegisteredEvents(
    user?.registeredEvents as any[]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="mb-4 sm:mb-8 justify-between flex items-center">
          <Link
            href="/"
            className="text-white flex items-center hover:text-red-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className={`${sedgwick.className} hidden sm:inline`}>
              HOME
            </span>
          </Link>
          <LogOutButton />
        </div>
        <Container>
          <div className="mb-4 sm:mb-8 flex items-center justify-center flex-col gap-2">
            <h1
              className={`${sedgwick.className} text-4xl font-extrabold text-white`}
            >
              Welcome <span className="text-red-400">{user?.name}</span>
            </h1>
            <div className="">
              <h1
                className={`${sedgwick.className} text-2xl font-extrabold text-white text-center`}
              >
                Registered Events : {user?.registeredEvents.length}
              </h1>
              <div
                className={`${sedgwick.className} flex gap-2 mt-4 flex-wrap justify-center`}
              >
                {registeredEvents?.map((event: any, i: number) => (
                  <div
                    key={i}
                    className="text-white bg-gray-800/50 p-4 rounded-lg mb-2 hover:bg-red-200 hover:text-red-700 duration-200 cursor-pointer"
                  >
                    <h2 className="text-xl font-semibold ">
                      {event?.eventName}
                    </h2>
                    {/* <p className="text-sm">{event?.eventDescription}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
        <Card className="mx-auto max-w-2xl bg-black/40 backdrop-blur-sm border-none text-white">
          <CardHeader className="space-y-2 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <CardTitle
                className={`${sedgwick.className} text-4xl sm:text-2xl font-extrabold`}
              >
                Welcome Back <span className="text-red-300">{user?.name}</span>
              </CardTitle>
              <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gray-800 flex items-center justify-center">
                <UserCircle2 className="h-8 w-8 sm:h-12 sm:w-12" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <ProfileForm
              user={{
                name: user?.name!,
                department: user?.department!,
                email: user?.credentials.email!,
                phoneNumber: user?.credentials.phoneNumber!,
                rollNumber: user?.rollNumber!,
                year: user?.year!,
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
