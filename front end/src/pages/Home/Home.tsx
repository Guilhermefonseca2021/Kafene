import Header from "../../components/Header/Header";
import styles from "./styles.module.css";
import homeImg from "../../assets/home-wrapper.svg";
import document from "../../assets/icons/icon__document-primary.svg";
import hands from "../../assets/icons/icon__hands-primary.svg";
import money from "../../assets/icons/icon__money-primary.svg";
import Footer from "../../components/footer/Footer";
import { NavLink } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


export default function Home() {
  return (
    <>
      <Parallax pages={1.8}>
      <ParallaxLayer offset={0} speed={-0.3}>
      <Header />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5} style={{ marginTop: '4rem'}} >
      <div className={styles.container}>
        <div className={styles.content}>
          <h2> Flexible Ownership </h2>
          <p>
            Kafene helps all consumers buy the thing they want over time,
            affordably. Credit and no credt check options are available.
          </p>
          <NavLink to='/register'>
            <button>Start your Application</button>
          </NavLink>
          
        </div>

        <div className={styles.wrapper}>
          <img src={homeImg} alt="" className={styles.wrapperImg} />
        </div>
      </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={0.7}>
      <div className={styles.board}>
        <div className={styles.boardHeader}>
          <h3>
            Kafene helps you enjoy the furniture, electronics, and appliances
            you want today
          </h3>

          <p>
            As low as $50 per month with terms to ownership from 1 to 2 years
          </p>
        </div>
        
        <div className={styles.boardItems}>
          <div className={styles.boardData}>
            <img src={document} alt="" />

            <h4> Simple aplications</h4>
            <p>Our application takes less time than making one cup of coffe</p>
          </div>

          <div className={styles.boardData}>
            <img src={hands} alt="" />

            <h4> Simple aplications</h4>
            <p>Our application takes less time than making one cup of coffe</p>
          </div>

          <div className={styles.boardData}>
            <img src={money} alt="" />

            <h4> Simple aplications</h4>
            <p>Our application takes less time than making one cup of coffe</p>
          </div>

          <div className="about"></div>
        </div>
      </div>
      <ParallaxLayer offset={0.8} speed={0.2}>
      <Footer />
      </ParallaxLayer>
      </ParallaxLayer>
      </Parallax>
    </>
  );
}
