import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const users = await User.find({});
    if (!users) {
      return NextResponse.json({
        message: "No user found",
      });
    }
    return NextResponse.json(
      users.map((u) => {
        return {
          name: u.name,
          year: u.year,
          department: u.department,
          rollNumber : u.rollNumber,
        };
      })
    );
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
    });
  }
}
