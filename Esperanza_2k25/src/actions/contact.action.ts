"use server";

import { ContactMessage } from "@/models/contact.model";
import { connectDB } from "@/utils/db/connect";

const contactMessage = async (name: string, email: string, message: string) => {
  try {
    await connectDB();
    const response = await ContactMessage.create({
      name,
      email,
      message,
    });
    if (response) {
      return {
        success: true,
        message: "Message Sent Successfully",
      };
    } else {
      return {
        success: false,
        message: "Message Sending Failed",
      };
    }
  } catch (error:any) {
    return {
      success: false,
      message: "Internal Server Error",
      error: error.message,
    };
  }
};

export { contactMessage };
