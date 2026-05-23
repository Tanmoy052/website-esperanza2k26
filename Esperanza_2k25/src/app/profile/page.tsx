"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  fetchRegisteredEvents,
  fetchUserByEmail,
} from "@/actions/fetch.action";
import { unregisterFromEvent } from "@/actions/profile.action";
import LogOutButton from "@/components/Profile/LogOutButton";
import ProfileForm from "@/components/Profile/ProfileForm";
import ProfilePhotoUpload from "@/components/Profile/ProfilePhotoUpload";
import Container from "@/components/Shared/Container";
import TeamManager from "@/components/Events/TeamManager";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Calendar, Trophy, UserMinus } from "lucide-react";
import { Karla, Sedgwick_Ave_Display } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import customSwal from "@/utils/swal";

const sedgwick = Sedgwick_Ave_Display({
  subsets: ["latin"],
  weight: ["400"],
});

const karla = Karla({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Profile() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>(null);
  const [registeredEvents, setRegisteredEvents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async (email: string) => {
    const userData = await fetchUserByEmail(email);
    const eventsData = await fetchRegisteredEvents(
      userData?.registeredEvents as any[]
    );

    setUser(userData);
    setRegisteredEvents(eventsData || []);
    setIsLoading(false);
  };

  useEffect(() => {
    if (status === "loading") return;
    
    if (!session?.user?.email) {
      router.push("/login");
      return;
    }
    
    loadData(session.user.email as string);
  }, [session, status, router]);

  const handleUnregister = async (eventId: string, eventName: string) => {
    const result = await customSwal.fire({
      title: "Are you sure?",
      text: `You will unregister from ${eventName}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, unregister!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed && session?.user?.email) {
      const res = await unregisterFromEvent(eventId);
      if (res.success) {
        customSwal.fire("Unregistered!", res.message, "success");
        loadData(session.user.email as string);
      } else {
        customSwal.fire("Error!", res.message, "error");
      }
    }
  };

  if (isLoading || status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-gray-900">
      <div className="container mx-auto px-4 py-4 sm:py-8">
        <div className="mb-4 sm:mb-8 justify-between flex items-center">
          <Link
            href="/"
            className="text-white flex items-center hover:text-red-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span className={`${sedgwick.className} hidden sm:inline text-lg`}>
              HOME
            </span>
          </Link>
          <LogOutButton />
        </div>
        <Container>
          <div className="mb-4 sm:mb-8 flex items-center justify-center flex-col gap-2">
            <h1
              className={`${sedgwick.className} text-4xl sm:text-5xl font-extrabold text-white text-center`}
            >
              Welcome <span className="text-red-400">{user?.name}</span>
            </h1>
            <div className="mt-8">
              <ProfilePhotoUpload
                currentPhoto={user?.profilePhoto}
                userEmail={session?.user?.email as string}
              />
            </div>
            <div className="mt-12 w-full">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Trophy className="h-8 w-8 text-yellow-400" />
                <h1
                  className={`${sedgwick.className} text-3xl sm:text-4xl font-extrabold text-white`}
                >
                  Registered Events
                </h1>
                <span className="bg-red-600 text-white px-4 py-1 rounded-full text-lg font-bold">
                  {registeredEvents.length}
                </span>
              </div>
              <div
                className={`flex flex-col gap-8 max-w-4xl mx-auto`}
              >
                {registeredEvents?.length > 0 ? (
                  registeredEvents?.map((event: any) => (
                    <div
                      key={event._id}
                      className="text-white bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 rounded-2xl border border-gray-700 shadow-2xl"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Calendar className="h-5 w-5 text-red-400" />
                            <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">
                              Event
                            </span>
                          </div>
                          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                            {event?.eventName}
                          </h2>
                          {event?.eventDescription && (
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {event.eventDescription}
                            </p>
                          )}
                        </div>
                        <button
                          onClick={() => handleUnregister(event._id, event.eventName)}
                          className="relative inline-flex items-center justify-center px-4 py-2 font-bold text-white transition-all duration-200 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-[0_4px_0_0_#991b1b] hover:shadow-[0_2px_0_0_#991b1b] hover:translate-y-[2px] active:shadow-none active:translate-y-[4px] rounded-lg whitespace-nowrap"
                        >
                          <UserMinus className="h-4 w-4 mr-2" />
                          Unregister
                        </button>
                      </div>
                      <TeamManager
                        eventId={event._id.toString()}
                        userEmail={session?.user?.email as string}
                        onUpdate={() => loadData(session?.user?.email as string)}
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-800/40 rounded-2xl border border-gray-700/50">
                    <div className="text-gray-400 text-lg">
                      You haven't registered for any events yet!
                    </div>
                    <Link
                      href="/events/technical"
                      className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg transition-all shadow-lg"
                    >
                      Browse Events
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
        <Card className="mx-auto max-w-2xl bg-gradient-to-br from-black/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 text-white mt-8 shadow-2xl">
          <CardContent className="p-4 sm:p-6">
            {user && (
              <ProfileForm
                user={{
                  name: user?.name!,
                  department: user?.department!,
                  email: user?.credentials.email!,
                  phoneNumber: user?.credentials.phoneNumber!,
                  rollNumber: user?.rollNumber!,
                  year: user?.year!,
                }}
                onUpdate={() => loadData(session?.user?.email as string)}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
