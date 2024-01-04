import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Matheus Henrique, desenvolvedor Front-end.
                    Aqui é um projeto de aprendizado em react, espero que gostem!
                </p>
            </div>
            <div className={styles.imagens}>
                <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} alt='Circulo Colorido' />
                <img className={styles.minhaFoto} src="https://github.com/deilor101.png" alt='foto de Matheus Henrique' />
            </div>
        </div>
    )
}