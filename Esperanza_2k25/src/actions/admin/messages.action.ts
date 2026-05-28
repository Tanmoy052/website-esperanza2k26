"use server";

import { auth } from "@/auth";
import { connectDB } from "@/utils/db/connect";
import { ContactMessage } from "@/models/contact.model";

export const getAllMessages = async () => {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    return { success: false, message: "Unauthorized" };
  }

  await connectDB();
  const messages = await ContactMessage.find().sort({ createdAt: -1 });
  const plainMessages = messages.map(msg => JSON.parse(JSON.stringify(msg)));
  return { success: true, messages: plainMessages };
};

export const deleteMessage = async (messageId: string) => {
  const session = await auth();
  if (!session?.user || session.user.role !== "admin") {
    return { success: false, message: "Unauthorized" };
  }

  await connectDB();
  const msg = await ContactMessage.findByIdAndDelete(messageId);
  if (!msg) {
    return { success: false, message: "Message not found" };
  }

  return { success: true, message: "Message deleted successfully" };
};
