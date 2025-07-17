"use client";
import { addPost } from "@/lib/actions";
import React, { useActionState } from "react";

const initialState = null;

function Page() {
  const [state, formAction, pending] = useActionState(addPost, initialState);
  return (
    <div>
      <form action={formAction}>
        <input type='text' name='title' id='' />
        <input type='text' name='desc' id='' />
        <input type='text' name='userId' id='' />
        <input type='text' name='slug' id='' />
        <button type='submit' disabled={pending}>
          submit
        </button>
      </form>
      {pending && <p>loading...</p>}
      {state?.error && <p>{state.error}</p>}
    </div>
  );
}

export default Page;
