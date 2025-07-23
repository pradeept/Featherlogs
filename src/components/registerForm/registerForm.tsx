"use client";

import { register } from "@/lib/actions";
import styles from "./registerForm.module.css";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loading from "@/utility/Loading";

function RegisterForm() {
  const [state, formAction, pending] = useActionState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type='text' placeholder='username' name='username' />
        <input type='email' placeholder='email' name='email' />
        <input type='password' placeholder='password' name='password' />
        <input
          type='password'
          placeholder='password again'
          name='passwordRepeat'
        />
        <button>Register</button>
        {state?.error}
        <Link href='/login'>
          Have an account? <b>Login</b>
        </Link>
      </form>
      {pending && <Loading />}
    </>
  );
}

export default RegisterForm;
