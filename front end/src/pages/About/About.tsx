import Header from "../../components/Header/Header";
import document from "../../assets/icons/icon__document-primary.svg";
import hands from "../../assets/icons/icon__hands-primary.svg";
import money from "../../assets/icons/icon__money-primary.svg";
import styles from "./styles.module.css";
import Footer from "../../components/footer/Footer";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function About() {
  return (
    <div>
      <Parallax pages={2.5}>
        <ParallaxLayer offset={0} speed={-0.3}>
          <Header />
        </ParallaxLayer>
        <div className={styles.screenAbout}>
          <div className={styles.about}>
            <ParallaxLayer offset={0} speed={0.5} style={{ marginTop: "4rem" }}>
              <h1> We’re Kafene! </h1>

              <p>
                We’re <b>Kafene</b> a mission-driven fintech company with the
                goal of empowering flexible ownership solutions. Our best in
                class technology brings innovative lease-to-own purchasing
                options to industries like furniture, appliances, and
                electronics.
              </p>

              <p>
                <b>Kafene’s</b> core product is a digital web and app-based
                lease to own platform that underwrites, approves, and enables
                payment in less than 5 minutes. Driving the experience is a
                suite of custom built technology at the cutting edge of payment
                processing, servicing, and underwriting.
              </p>

              <p>
                Kafene helps you enjoy the furniture, electronics, and
                appliances you want today Lease the products you love with
                Kafene’s flexible, affordable options
              </p>

              <div className={styles.board}>
                <div className={styles.boardHeader}>
                  <h3>
                    Kafene helps you enjoy the furniture, electronics, and
                    appliances you want today
                  </h3>

                  <p>
                    As low as $50 per month with terms to ownership from 1 to 2
                    years
                  </p>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.4} speed={0.6}>
              <div className={styles.boardItems}>
                <div className={styles.boardData}>
                  <img src={document} alt="" />

                  <h4> Simple aplications</h4>
                  <p>
                    Our application takes less time than making one cup of coffe
                  </p>
                </div>

                <div className={styles.boardData}>
                  <img src={hands} alt="" />

                  <h4> Simple aplications</h4>
                  <p>
                    Our application takes less time than making one cup of coffe
                  </p>
                </div>

                <div className={styles.boardData}>
                  <img src={money} alt="" />

                  <h4> Simple aplications</h4>
                  <p>
                    Our application takes less time than making one cup of coffe
                  </p>
                </div>
              </div>
            </ParallaxLayer>
          </div>
        </div>
        <ParallaxLayer offset={1.7} speed={0.2}>
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
