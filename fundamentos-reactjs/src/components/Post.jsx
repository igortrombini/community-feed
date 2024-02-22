import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/igortrombini.png" />
                    <div className={styles.authorInfo}>
                        <strong> Igor Trombini </strong>
                        <span> Web Developer</span>
                    </div>
                </div>
                <time title='22 de Fevereiro às 16:32h' dateTime='2024-02-22 16:31:20'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>jane.design/doctorcare</a></p>
                <p>
                    <a href=''>#novoprojeto</a>{''}
                    <a href=''>#nlw</a>{''}
                    <a href=''>#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu comentário</strong>
                <textarea
                    placeholder="Deixe um comentário"
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>


    );
}