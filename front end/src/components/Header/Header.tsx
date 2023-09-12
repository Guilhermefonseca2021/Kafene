import { NavLink } from 'react-router-dom'
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
                <NavLink to='/' className={styles.li}>Home </NavLink>
                <NavLink to='About' className={styles.li}>About</NavLink>
                <NavLink to='/' className={styles.li}>FAQs</NavLink>
            </ul>
            </nav>
        </div>
    )
}