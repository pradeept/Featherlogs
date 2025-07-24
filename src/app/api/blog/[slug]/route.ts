import { Post } from "@/lib/model";
import { connectToDB } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


// Get a post
export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) => {
  const { slug } = await params;

  try {
    await connectToDB();

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
    await connectToDB();

    await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};
