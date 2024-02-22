import styles from './PostCard.module.scss'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import MainButton from '../MainButton/MainButton'

PostCard.propTypes = {
    post: PropTypes.object.isRequired,
}

export default function PostCard({ post }) {
    return (
        <Link to={`/posts/${post['id']}`}>
            <div className={styles.post}>
                <img
                    className={styles.cover}
                    src={`/assets/posts/${post['id']}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.title}>{post['title']}</h2>

                <MainButton size='sm'>
                    Ler
                </MainButton>
            </div>
        </Link>
    )
}