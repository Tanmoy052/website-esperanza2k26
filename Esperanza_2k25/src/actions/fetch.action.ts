"use server";

import { Event } from "@/interfaces/events.interface";
import { User as UserType } from "@/interfaces/user.interface";
import { Events } from "@/models/events.model";
import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";
import { revalidatePath, revalidateTag } from "next/cache";

const serializeDoc = (doc: any) => {
  return JSON.parse(JSON.stringify(doc));
};

const fetchAllEvents = async (eventCategory?: "technical" | "cultural") => {
  try {
    await connectDB();
    const events = await Events.find({ eventCategory }).sort({
      eventDate: 1,
    });
    return events.map(serializeDoc) as Event[];
  } catch (error: any) {
    console.log("Error fetching events: ", error.message);
    return null;
  }
};

const fetchEventByUniqueId = async (uniqueId: number) => {
  try {
    await connectDB();
    const event = await Events.findOne({ uniqueId });
    return event ? serializeDoc(event) : null;
  } catch (error: any) {
    console.log("Error in fetching events: ", error.message);
    return null;
  }
};

const fetchUserByEmail = async (email?: string) => {
  if (!email) {
    return null;
  }
  try {
    await connectDB();
    const user = await User.findOne({
      "credentials.email": email,
    });
    revalidateTag("user");
    return user ? serializeDoc(user) : null;
  } catch (error: any) {
    console.log("Error fetching user: ", error.message);
    return null;
  }
};

const fetchRegisteredEvents = async (eventsIds: any[]) => {
  if (!eventsIds?.length) {
    return null;
  }

  try {
    const events = await Promise.all(
      eventsIds.map(async (eventId) => {
        const event = await Events.findById(eventId);
        if (!event) return null;
        return {
          _id: event._id.toString(),
          uniqueId: event.uniqueId,
          eventName: event.eventName,
          eventDescription: event.eventDescription,
        };
      })
    );

    // Filter out nulls (if any eventId didn't match)
    revalidateTag("events");
    return events.filter((event) => event !== null);
  } catch (error: any) {
    console.log("Error fetching registered events: ", error.message);
    return null;
  }
};

export {
  fetchAllEvents,
  fetchUserByEmail,
  fetchRegisteredEvents,
  fetchEventByUniqueId,
};
