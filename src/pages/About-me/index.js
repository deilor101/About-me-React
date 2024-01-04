import styles from "./AboutMe.module.css"
import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png"

export default function AboutMe() {

     const fotoSobreMim = 'https://github.com/deilor101.png'

    return(
        <PostModel fotoCapa={fotoCapa} titulo='Sobre mim'>
            <h3 className={styles.subtitulo}>Olá, eu sou o Matheus</h3>
            <img src={fotoSobreMim} alt="minha foto" className={styles.fotoSobreMim} />
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed sodales felis. Quisque rutrum erat ac hendrerit iaculis. In fringilla mauris sed ornare imperdiet. Maecenas non suscipit elit, ut aliquet mauris. Curabitur gravida nisi nec sem molestie, id convallis nisl vestibulum. Nam sit amet laoreet leo. Suspendisse sed egestas metus, ut efficitur sem. Nullam tempor metus eget ipsum auctor, in pellentesque purus hendrerit.</p>


        </PostModel>
    )
}