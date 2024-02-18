import styles from './Banner.module.scss'
import wheelColor from 'assets/images/circulo_colorido.png'
import myPhoto from 'assets/images/myPhoto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div>
                <h1 className={styles.title}>
                    Hoya, World!
                </h1>

                <p className={styles.paragraph}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.images}>
                <img
                    className={styles.wheelColor}
                    src={wheelColor}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.myPhoto}
                    src={myPhoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}