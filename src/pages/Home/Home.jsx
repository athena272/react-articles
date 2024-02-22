import styles from './Home.module.scss'
import posts from '../../../public/assets/json/posts.json'
import PostCard from '../../component/PostCard/PostCard'

export default function Home() {
    return (
        <ul className={styles.posts}>
            {posts.map((post, index) => (
                <li key={index}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    )
}