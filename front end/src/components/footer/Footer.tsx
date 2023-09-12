import styles from "./styles.module.css";
import cta from "../../assets/images/img__cta-151119@2x.png";
import Header from "../Header/Header";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerHeader}>
          <img src={cta} alt="download our APP" />

          <div className={styles.headerContent}>
            <h3> Kafene is made for you</h3>
            <p>
              Customized lease options odd flexbility and affordability for your
              life. Get the products you want without having to pay for it all
              upfront. <br />
              Ready for Kafene?
            </p>
            <button> Start your Aplication </button>
          </div>
        </div>
      </div>

      <div className={styles.footerAbout}>
        <Header />
        <hr />
        <ul className={styles.aboutList}>
          <li>
            <a href="#">Forum</a>
          </li>
          <li>
            <a href="#">AQs</a>
          </li>
          <li>
            <a href="#">APi</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
