import styles from './NotFound.module.scss';
import erro404 from 'assets/images/erro_404.png'
import MainButton from '../../component/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    console.log("🚀 ~ NotFound ~ navigate:", navigate)

    return (
        <>
            <div className={styles.contentContainer}>
                <span className={styles.text404}>404</span>

                <h1 className={styles.title}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragraph}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragraph}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                    className={styles.containerButton}
                    onClick={() => navigate(-1)}
                >
                    <MainButton size="lg">
                        Voltar
                    </MainButton>
                </div>

                <img
                    className={styles.dogImage}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.whiteSpace}></div>
        </>

    )
}