"use client";
import React, { useActionState } from "react";
import styles from "./adminPosts.module.css";
import { deletePost } from "@/lib/actions";
import Loading from "@/utility/Loading";
function DeletePost({ id }) {
  const [state, formAction, pending] = useActionState(deletePost, null);
  return (
    <form action={formAction}>
      <input type='hidden' name='id' value={id} />
      <button className={styles.postButton}>Delete</button>
      {state?.error && <p>{state?.error}</p>}
      {pending && <Loading />}
    </form>
  );
}

export default DeletePost;
