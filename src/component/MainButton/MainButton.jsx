import styles from './MainButton.module.scss'
import PropTypes from "prop-types"

MainButton.propTypes = {
    size: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default function MainButton({ size, children }) {
    return (
        <button className={`
            ${styles['mainButton']} 
            ${styles[size]}
        `}>
            {children}
        </button>
    )
}