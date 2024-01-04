import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import Botao from "components/Botao";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`../../assets/posts/${post.id}/capa.png`}
          alt="capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <Botao children='Ler' />

      </div>
    </Link>
  );
}
