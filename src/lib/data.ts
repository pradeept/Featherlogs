import { Post, User } from "./model";
import { connectToDB } from "./db";
// import { unstable_noStore as noStore } from "next/cache";
import { connection } from "next/server";



// Get all posts
export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

// Get specific post
export const getPost = async (slug:string) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

// Get a user
export const getUser = async (id:string) => {
  await connection(); // So that the data is not cached
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

// Get all users - used in Admin mode
export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};