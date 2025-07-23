"use client";

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css";
import { useActionState } from "react";
import Loading from "@/utility/Loading";
import { motion } from "motion/react";
import { slideInProps } from "@/utility/slideIn";

const AdminPostForm = ({ userId }) => {
  const [state, formAction, pending] = useActionState(addPost, undefined);

  return (
    <motion.form {...slideInProps} action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type='hidden' name='userId' value={userId} />
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='slug' placeholder='slug' />
      <input type='text' name='img' placeholder='img' />
      <textarea name='desc' placeholder='desc' rows={10} />
      <button>Add</button>
      {state?.error}
      {pending && <Loading />}
    </motion.form>
  );
};

export default AdminPostForm;
