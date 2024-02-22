import './Post.scss';
import styles from './Post.module.scss';

import { Route, Routes, useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown";
import posts from '../../data/json/posts.json'
import PostModel from "../../component/PostModel/PostModel";
import NotFound from '../NotFound/NotFound';
import StandardPage from '../../component/StandardPage/StandardPage';
import PostCard from '../../component/PostCard/PostCard';

export default function Post() {
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    if (!post) {
        return <NotFound />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(params.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<StandardPage />}>
                <Route index element={
                    <PostModel
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {postsRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>

                    </PostModel>
                } />
            </Route>
        </Routes>
    )
}