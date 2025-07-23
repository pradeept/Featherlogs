"use client";

import { addUser } from "@/lib/actions";
import styles from "./adminUserForm.module.css";
import { useActionState } from "react";
import Loading from "@/utility/Loading";
import { motion } from "motion/react";
import { slideInProps } from "@/utility/slideIn";

const AdminUserForm = () => {
  const [state, formAction, pending] = useActionState(addUser, undefined);

  return (
    <motion.form
      {...slideInProps}
      action={formAction}
      className={styles.container}
    >
      <h1>Add New User</h1>
      <input type='text' name='username' placeholder='username' />
      <input type='text' name='email' placeholder='email' />
      <input type='password' name='password' placeholder='password' />
      <input type='text' name='img' placeholder='img' />
      <select name='isAdmin'>
        <option value='false'>Is Admin?</option>
        <option value='false'>No</option>
        <option value='true'>Yes</option>
      </select>
      <button>Add</button>
      {state?.error}
      {pending && <Loading />}
    </motion.form>
  );
};

export default AdminUserForm;
