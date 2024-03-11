import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1

        });

    }

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
                        <button onClick={handleDeleteComment} title='Deletar Publicação'>
                            <Trash size={24} />
                        </button>

                    </header>


                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}