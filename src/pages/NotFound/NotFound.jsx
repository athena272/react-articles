import styles from './NotFound.module.css';
import erro404 from 'assets/images/erro_404.png'
import MainButton from '../../component/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();
    console.log("🚀 ~ NotFound ~ navigate:", navigate)

    return (
        <>
            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Ops! Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Tem certeza de que era isso que você estava procurando?
                </p>

                <p className={styles.paragrafo}>
                    Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navigate(-1)}
                >
                    <MainButton size="lg">
                        Voltar
                    </MainButton>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Cachorro de óculos e vestido como humano"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>

    )
}