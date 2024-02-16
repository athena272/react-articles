import styles from './MainButton.module.scss'

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