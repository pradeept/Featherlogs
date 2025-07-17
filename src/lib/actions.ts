"use server";

import { connectToDB } from "./db";
import { Post } from "./model";

// Add on: Use this to send Email from Contact page
export const addPost = async ( prevState,formData:FormData) => {
    // NOTE: prevState is the first parameter passed when using useActionState.
    console.log(prevState);
    
  const { title, desc, userId, slug } = Object.fromEntries(formData);
  console.log(title,desc, userId, slug);
  return {error:"Got the error while saving to DB"}
//   try {
//     connectToDB();

//     const newPost = new Post({ title, desc, userId, slug });
//     await newPost.save();
//     console.log("Saved to DB");
//   } catch (err) {
//     console.log(err);
//     return {error: "Something went wrong while saving the post"};
//   }
};
