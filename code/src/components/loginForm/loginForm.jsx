"use client";
 
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import Link from "next/link"; 
import { handleGithubLogin, login } from "@/lib/action";

const LoginForm = async () => {
  const [state, formAction] = useFormState(login, undefined);
  const gitHubLogin = await handleGithubLogin()

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="password" placeholder="password" name="password" />
      {state?.error}
      <button className={styles.btn} type="submit">Login</button> 
      <form action={gitHubLogin}> 
        <button className={styles.github}>Or Login with Github </button>
        
      </form>
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
