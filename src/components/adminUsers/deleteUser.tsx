"use client";
import React, { useActionState } from "react";
import styles from "./adminUsers.module.css";
import { deleteUser } from "@/lib/actions";
import Loading from "@/utility/Loading";
function DeleteUser({ id }) {
  const [state, formAction, pending] = useActionState(deleteUser, null);
  return (
    <form action={formAction}>
      <input type='hidden' name='id' value={id} />
      <button className={styles.userButton}>Delete</button>
      {state?.error && <p>{state?.error}</p>}
      {pending && <Loading />}
    </form>
  );
}

export default DeleteUser;
