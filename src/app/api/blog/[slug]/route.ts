import { Post } from "@/lib/model";
import { connectToDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// NOTE: Either we can define DB logic here or make a separate file like controller in /lib
// Get a post
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;

  try {
    connectToDB();

    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

// Delete a post - used in Admin Mode
export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;

  try {
    connectToDB();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
