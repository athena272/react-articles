import styles from './PostModel.module.scss'
import PropTypes from 'prop-types'

PostModel.propTypes = {
    coverPhoto: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default function PostModel({ coverPhoto, title, children }) {
    return (
        <article className={styles.postModelContainer}>
            <div
                className={styles.coverPhoto}
                style={{ backgroundImage: `url(${coverPhoto})` }}
            ></div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}