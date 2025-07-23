import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";
import { GithubIcon } from "lucide-react";
import { auth } from "@/lib/auth";

async function LoginPage() {

  const session = await auth()

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>
            Login with Github <GithubIcon />
          </button>
        </form>
        <LoginForm session={session}/>
      </div>
    </div>
  );
}

export default LoginPage;
