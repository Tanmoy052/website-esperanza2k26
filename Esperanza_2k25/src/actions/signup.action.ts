"use server";

import { SignUpFormPayload } from "@/interfaces/signup.interface";
import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";

export const signUp = async (payload: SignUpFormPayload) => {
  try {
    await connectDB();
    const signUpResponse = await User.create({
      name: payload.name,
      year: payload.year,
      department: payload.department,
      rollNumber: payload.rollNumber,
      "credentials": {
        email: payload.credentials.email,
        password: payload.credentials.password,
        phoneNumber: payload.credentials.phoneNumber,
      },
    });
    
    if (signUpResponse) {
      return {
        success: true,
        status: "S",
        message: "User created successfully",
        userEmail: signUpResponse?.credentials?.email,
      };
    }
  } catch (error:any) {
    console.log(error);
    
    return {
      success: false,
      status: "F",
      message: "User creation failed",
      error: error.message,
    };
  }
};
