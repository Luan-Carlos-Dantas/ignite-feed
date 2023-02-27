import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
            className= {styles.cover}
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt="image-cover"/>
            <div className={styles.profile}>
                <img  
                className={styles.avatar}
                src="https://github.com/Luan-Carlos-Dantas.png"/>
                <strong>Luan Carlos</strong>
                <span>Dev. Júnior</span>
                <footer>
                    <a href="/">
                        <PencilLine />
                        Editar perfil
                        </a>
                </footer>
            </div>
        </aside>
    )
}