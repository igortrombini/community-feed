import { Post } from "./components/Post"
import { Header } from "./components/Header"

import './global.css';
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Igor Trombini"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat incidunt quos laboriosam animi excepturi. Perferendis, quaerat libero! Consequatur sequi at ad corporis totam? Ut corrupti fugiat illum ipsum soluta"
          />
          <Post
            author="Hariel Carvalho"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat incidunt quos laboriosam animi excepturi. Perferendis, quaerat libero! Consequatur sequi at ad corporis totam? Ut corrupti fugiat illum ipsum soluta"
          />
        </main>
      </div>


    </div>
  )
}


