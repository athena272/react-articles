import styles from './Menu.module.scss'
import LinkMenu from '../LinkMenu/LinkMenu'

export default function Menu() {
    return (
        <header>
            <nav className={styles.navigation}>
                <LinkMenu to="/">
                    Início
                </LinkMenu>
                <LinkMenu to="/sobremim">
                    Sobre Mim
                </LinkMenu>
            </nav>
        </header>
    )
}
