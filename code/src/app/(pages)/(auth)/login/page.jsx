import LoginForm from "@/components/loginForm/loginForm"; 
import styles from "./login.module.css";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>Welcome Back </h3>
        <p>Please Enter Your credentials To Login</p>
        <LoginForm />
        
      </div>
    </div>
  );
};

export default LoginPage;
