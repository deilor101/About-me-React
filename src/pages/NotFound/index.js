import Botao from 'components/Botao'
import styles from './NotFound.module.css'
import Erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

    const navegar = useNavigate();
    return(
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada.</h1>
            <p className={styles.paragrafo}>
                Não encontramos o que você estava procurando, retorne para a página inicial.
            </p>
            <div className={styles.botaoContainer} onClick={() => navegar(-1)}>
                <Botao size="lg" children='Voltar'/>
            </div>
            <img className={styles.imagemCachorro} src={Erro404} alt='cachorro de oculos e vestido como humano'/>
        </div>
        <div className={styles.espacoEmBranco}>

        </div>
        </>
        
    )
}