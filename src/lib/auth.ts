import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDB } from "./db";
import { User } from "./model";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

//Login with credentials
const login = async (credentials) => {
  try {
    await connectToDB();
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(profile);
      if (account?.provider === "github") {
        await connectToDB();
        try {
          // Check if user exist
          const userDocument = await User.findOne({ email: user.email });

          // If not create a new user
          if (!userDocument) {
            const newUser = new User({
              username: user.name,
              img: user.image,
              email: user.email,
              password: account?.access_token,
            });
            await newUser.save();
          }
          return true;
        } catch (e) {
          console.log(e);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
