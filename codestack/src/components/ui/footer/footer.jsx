import Link from "next/link";
import { profile } from "./data";
import Image from "next/image";
import styles from "@/components/ui/footer/footer.module.css";

const Footer = () => {
  return (
    <div className={styles.profiles}>
      {profile.map((use) => (
        <Link href={use.link} key={use.id}>
          <Image className={styles.img} height={50} width={50} alt={use.name} src={use.image} />
          <p>{use.name}</p>
        </Link>
      ))}
      <div className={styles.btn}>
        <button type="submit"> Join codeStack</button>
      </div>
    </div>
  );
};

export default Footer;
