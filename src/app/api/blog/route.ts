import { Post } from "@/lib/model";
import { connectToDB } from "@/lib/db";
import { NextResponse } from "next/server";

/*
NOTE: Either we can define DB logic here or make a separate file like controller in /lib
*/

// Get all Posts
export const GET = async () => {
  try {
    await connectToDB();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
