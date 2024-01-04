import styles from './Footer.module.css'
import MarcaRegistrada from 'assets/marca_registrada.svg'


export default function Footer() {
    return (
        <footer className={styles.rodape}>
            <img src={MarcaRegistrada} alt='Marca Registrada logo' />
            Desenvolvido por Matheus
        </footer>
    )
}