import styles from "./login.module.css";

function loginpage () {
  return(
<div className={styles.container}>
<p> Please login with your credentials</p>
  <div className={styles.formContainer}>
    <form action="" className={styles.form}>
      <label>Email</label>
      <input type="text" placeholder=" Enter Email Address" />
      <label>password</label>
      <input type="text" placeholder=" Enter Password" />

      <button>Login</button>
    </form>
  </div>
</div>

  )
}
export default loginpage;