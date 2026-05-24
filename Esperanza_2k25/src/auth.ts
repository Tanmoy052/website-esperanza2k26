import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";
import { compare } from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async function (credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!email || !password) {
          throw new CredentialsSignin("Missing credentials");
        }
        await connectDB();

        const user = await User.findOne({ "credentials.email": email }).select(
          "+credentials.password"
        );

        if (!user) {
          throw new CredentialsSignin("User not found");
        }
        if (!user.credentials?.password) {
          throw new CredentialsSignin("Password not found");
        }
        const isMatch = await compare(password, user.credentials.password);
        if (!isMatch) {
          throw new CredentialsSignin("Wrong Password");
        } else {
          return {
            name: user.name,
            email: user.credentials.email,
          };
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
