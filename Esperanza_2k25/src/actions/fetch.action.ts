"use server";

import { Event } from "@/interfaces/events.interface";
import { User as UserType } from "@/interfaces/user.interface";
import { Events } from "@/models/events.model";
import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";

const fetchAllEvents = async (eventCategory?: "technical" | "cultural") => {
  try {
    await connectDB();
    const events = (await Events.find({ eventCategory }).sort({
      eventDate: 1,
    })) as Event[];
    return events;
  } catch (error: any) {
    console.log("Error fetching events: ", error.message);
    return null;
  }
};

const fetchEventByUniqueId = async (uniqueId: number) => {
  try {
    await connectDB();
    const event = (await Events.findOne({ uniqueId })) as Event;
    return event;
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
    const user = (await User.findOne({
      "credentials.email": email,
    })) as UserType;
    if (!user) {
      return null;
    }
    return user;
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
          eventName: event.eventName,
          eventDescription: event.eventDescription,
        };
      })
    );

    // Filter out nulls (if any eventId didn't match)
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
