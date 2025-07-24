"use client";

import { login } from "@/lib/actions";
import styles from "./loginForm.module.css";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import Loading from "@/utility/Loading";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";

const LoginForm = ({ session }: { session: Session | null }) => {
  const [state, formAction, pending] = useActionState(login, undefined);
  const router = useRouter();
  console.log(session);
  useEffect(() => {
    if (state?.success || session) {
      router.refresh()
    }
  }, [state, state?.success, router,session]);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type='email' placeholder='email' name='email' />
        <input type='password' placeholder='password' name='password' />
        <button>Login</button>
        {state?.error}
        <Link href='/register'>
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
      {pending && <Loading />}
    </>
  );
};

export default LoginForm;
