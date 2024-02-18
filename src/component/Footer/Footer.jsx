import styles from './Footer.module.scss'
import { ReactComponent as Trademark } from 'assets/marca_registrada.svg';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Trademark />

            Desenvolvido por Alura.
        </footer>
    )
}