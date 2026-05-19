"use server";

import { signIn } from "@/auth";
import { LoginCredentials } from "@/interfaces/signup.interface";
import { CredentialsSignin } from "next-auth";

export const login = async (loginCredentials: LoginCredentials) => {
  try {
    await signIn("credentials", {
      email : loginCredentials.email,
      password : loginCredentials.password,
    });
  } catch (error) {
    const err = error as CredentialsSignin;
    return err.cause
  }
};