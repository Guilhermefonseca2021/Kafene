import styles from "./styles.module.css";
import cta from "../../assets/images/img__cta-151119@2x.png";
import logo from '../../assets/logo-kafene-black.svg'
import { NavLink } from "react-router-dom";

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
        
        <div className={styles.header}>
            <nav className={styles.navegator}>
            <div className={styles.logoContainer}>
                <img src={logo} alt='' className={styles.logo} />
            </div>

            <ul className={styles.navItems}>
                <NavLink to='/' className={styles.li}>Home </NavLink>
                <NavLink to='About' className={styles.li}>About</NavLink>
                <NavLink to='/' className={styles.li}>FAQs</NavLink>
                <NavLink to='/register' className={styles.li}> Contact us</NavLink>
            </ul>
            </nav>
        </div>

        <hr />
        <ul className={styles.aboutList}>
          <sub>@copyright 2019 all rights reserved</sub>

          <div className={styles.aboutList}>
            <li>
              <a href="#">Forum</a>
            </li>
            <li>
              <a href="#">AQs</a>
            </li>
            <li>
              <a href="#">APi</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}
