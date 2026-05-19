import { Events } from "@/models/events.model";
import { connectDB } from "@/utils/db/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const {
      uniqueId,
      eventName,
      eventDescription,
      eventDate,
      eventStartTime,
      eventEndTime,
      venue,
      eventCategory,
      ruleBookLink,
      leads,
    } = await request.json();

    await connectDB();

    const event = await Events.create({
      uniqueId,
      eventName,
      eventDescription,
      eventDate,
      eventStartTime,
      eventEndTime,
      venue,
      eventCategory,
      ruleBookLink,
      leads,
    });

    if (event) {
      return NextResponse.json({
        success: true,
        message: "Event Created Successfully",
        event,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Event Creation Failed",
        event: null,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "Internal Server Error",
      error: error,
    });
  }
}
