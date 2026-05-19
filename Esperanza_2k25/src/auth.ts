import { User } from "@/models/user.model";
import { connectDB } from "@/utils/db/connect";
import { compare } from "bcryptjs";
import NextAuth, { CredentialsSignin } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GithubProvider({
      clientId : process.env.GITHUB_CLIENT_ID,
      clientSecret : process.env.GITHUB_CLIENT_SECRET
    }),
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
          throw new CredentialsSignin({
            cause: "Missing credentials",
          });
        }
        await connectDB();

        const user = await User.findOne({ "credentials.email": email }).select(
          "+credentials.password"
        );

        if (!user) {
          throw new CredentialsSignin({
            cause: "User not found",
          });
        }
        if (!user.credentials?.password) {
          throw new CredentialsSignin({
            cause: "Password not found",
          });
        }
        const isMatch = await compare(password, user.credentials.password);
        if (!isMatch) {
          throw new CredentialsSignin({
            cause: "Wrong Password",
          });
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
