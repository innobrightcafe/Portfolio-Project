import styles from "./register.module.css";
import RegisterForm from "@/components/registerForm/registerForm";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h3>Welcome to CodeStack</h3>
      <p>Please Enter Your credentials To Get started</p>
        <RegisterForm/>
      </div>
    </div>
  );
};

export default RegisterPage;
