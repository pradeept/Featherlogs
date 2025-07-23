"use server";

import { signIn, signOut } from "@/lib/auth";
import { connectToDB } from "./db";
import {  Post, User } from "./model";
import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";

// Using NextAuth
export const handleGithubLogin = async () => {
  await signIn("github");
  return;
};

// Logout action for both GitHub and Credentials login
export const handleLogout = async () => {
  await signOut();
  return;
};

// Using Credentials
export const login = async (prevState, formData: FormData) => {
  const { email, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", {
      email,
      password: password.toString(),
      redirect: false,
    });
    return { success: true };
  } catch (err:any) {
    console.log(err);
    console.log("Kind: ", err.kind);

    if (err.type && err.type == "CredentialsSignin") {
      return { error: "Invalid username or password" };
    } else {
      return { error: "Something went wrong. Try again later" };
    }
  }
};

// Register a new User
export const register = async (prevState, formData: FormData) => {
  const { username, email, password } = Object.fromEntries(formData);

  //Validate data.
  await connectToDB();

  try {
    // Check if user exist
    const findUser = await User.findOne({ email });
    if (findUser) return { error: "User already exist!" };

    // Create new user
    const salt = await bcrypt.genSalt(5);
    const saltedPassword = await bcrypt.hash(password.toString(), salt);
    const newUser = new User({ email, username, password: saltedPassword, isAdmin:true });
    await newUser.save();
    
    return { success: true};
  } catch (e) {
    console.log(e);
    return { error: "Something went wrong. Try again later." };
  }
};


// ------------------------- Admin functionalities ---------------------

export const addPost = async (prevState,formData) => {
  // const title = formData.get("title");
  // const desc = formData.get("desc");
  // const slug = formData.get("slug");

  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


// Delete a post
export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// Add a user
export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    await connectToDB();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

// Delete a user
export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};








// Add on: Use this to send Email from Contact page
export const contactAdmin = async (prevState, formData: FormData) => {
  // NOTE: prevState is the first parameter passed when using useActionState.
  console.log(prevState);

  const { title, desc, userId, slug } = Object.fromEntries(formData);
  console.log(title, desc, userId, slug);
  return { error: "Got the error while saving to DB" };
  //   try {
  //     await connectToDB();

  //     const newPost = new Post({ title, desc, userId, slug });
  //     await newPost.save();
  //     console.log("Saved to DB");
  //   } catch (err) {
  //     console.log(err);
  //     return {error: "Something went wrong while saving the post"};
  //   }
};
