import { Avatar } from './Avatar';
import styles from './Comment.module.css'
import {ThumbsUp, Trash} from 'phosphor-react'

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} img src="https://github.com/igortrombini.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Igor Trombini</strong>
                        <time title='22 de Fevereiro às 16:32h' dateTime='2024-02-22 16:31:20'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Publicação'>
                            <Trash size={24}/>
                        </button>

                    </header>


                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}