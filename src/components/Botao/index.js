import styles from './Botao.module.css'

export default function Botao({ children, size }) {
    return(
        <button className={`${styles.botaoLer} ${styles[size]}`}>{children}</button>
    )
}