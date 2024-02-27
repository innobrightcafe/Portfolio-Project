import styles from "./contact.module.css";
import Image from "next/image";

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact1.jpg" alt="" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <p>For technical support , please use the form below to write support</p>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email Address" />
          <textarea
            name=""
            id=""
            cols={10}
            rows={5}
            placeholder="Message"
            
            
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
