import logo from '../../assets/logo-kafene-black.svg'
import styles from './styles.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <nav className={styles.navegator}>
            <div className={styles.logoContainer}>
                <img src={logo} alt='' className={styles.logo} />
            </div>

            <ul className={styles.navItems}>
                <li>Home</li>
                <li>About</li>
                <li>FAQs</li>
            </ul>
            </nav>
        </div>
    )
}