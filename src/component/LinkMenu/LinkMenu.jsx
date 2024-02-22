import styles from './LinkMenu.module.scss'
import PropTypes from "prop-types"
import { Link, useLocation } from 'react-router-dom';

LinkMenu.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default function LinkMenu({ children, to }) {
    const location = useLocation();
    // console.log("🚀 ~ LinkMenu ~ location:", location)

    return (
        <Link className={`
            ${styles.link}
            ${location.pathname === to ? styles.linkVisited : ""}
        `} to={to}>
            {children}
        </Link>
    )
}