import { MdVerified } from "react-icons/md";
// styles
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} DTS Kominfo - REA2A
        </p>
        <p className={styles.created}>
          Wawan Rudiana N - 15223586510093{" "}
          <span>
            <MdVerified />
          </span>{" "}
        
        </p>
      </div>
    </footer>
  );
};

export default Footer;
