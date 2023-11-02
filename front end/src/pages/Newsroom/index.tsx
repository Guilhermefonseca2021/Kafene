import CardBox from "../../components/CardBox";
import Header from "../../components/Header/Header";
import Footer from "../../components/footer/Footer";
import styles from './styles.module.css'

export default function Newsroom() {
  return (
    <>
      <Header />
      <div className={styles['container-box']}>
        <div className={styles['header-box']}>
          <h3>Contribuidores: </h3>
          <p>para fazer parte e se destacar aqui, por favor entre em contato com um dos contribuidores do projeto pelo linked in para mais informacoes.</p>
        </div>
        <CardBox name="Guilherme" description="Desenvolvedor web, estudante de letras  apaixonado por tecnologias e idiomas" />
      </div>
      <Footer />
    </>
  )
}
