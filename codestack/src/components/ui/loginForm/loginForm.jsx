import styles from "@/components/ui/loginForm/loginform.module.css";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} action="">
          <input type="text" placeholder="username" name="username" />
          <input type="password" placeholder="password" name="password" />
          <button>Login</button>
          {/* {state?.error} */}
          <Link href="/register">
            <p>
              {"Don't have an account?"} <b>Register</b>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
