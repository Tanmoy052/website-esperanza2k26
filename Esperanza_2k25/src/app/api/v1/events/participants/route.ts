import { Events } from "@/models/events.model";
import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { uniqueId } = await req.json();
    
    const event = await Events.findOne({ uniqueId });
    if (!event) {
      return NextResponse.json({ message: "No event found" }, { status: 404 });
    }

    const participants = await Promise.all(
      event.participants.map(async (p: any) => {
        const user = await User.findById(p);
        if (user) {
          return {
            name: user.name,
            year: user.year,
            department: user.department,
            rollNumber : user.rollNumber,
            contact: user.credentials.phoneNumber,
          };
        }
        return null;
      })
    );

    // Filter out null values in case any user was not found
    const filteredParticipants = participants.filter(Boolean);

    return NextResponse.json({
      event: event.eventName,
      uniqueId,
      participants: filteredParticipants
    });

  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
