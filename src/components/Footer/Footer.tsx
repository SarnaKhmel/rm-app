
import styles from "./styles.module.css";
import {
  GithubOutlined,
  HeartFilled,
  TwitterOutlined,
} from "@ant-design/icons";
import { IncodeLogo } from '../../assets/images/IncodeLogo'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.footerText}>
        performed as part of a test case for the company
      </h2>
      <div className={styles.logo}>
        <IncodeLogo />
      </div>
      <div className={styles.social}>
        <GithubOutlined style={{ fontSize: "20px", marginRight: "27px" }} />
        <TwitterOutlined style={{ fontSize: "20px", marginRight: "27px" }} />
        <HeartFilled style={{ fontSize: "20px" }} />
      </div>
      <p>2023</p>

    </footer>
  );
};

export default Footer;
