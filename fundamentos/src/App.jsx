import {Post} from "./components/Post"
import { Header } from './components/Header'
import { Sidebar } from "./components/Sidebar"

import './global.css'
import style from './App.module.css'

export function App(){
    return(
        <>
            <Header />
            <div className={style.wrapper}>
                <Sidebar />
                <main>
                <Post 
            author="Luan Carlos" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illo iusto corrupti quas dolores nemo aliquam repellat mollitia asperiores modi quasi incidunt veritatis dignissimos natus a placeat accusantium, dolore nostrum."/>

            <Post 
            author="Iago Dantas" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt illo iusto corrupti quas dolores nemo aliquam repellat mollitia asperiores modi quasi incidunt veritatis dignissimos natus a placeat accusantium, dolore nostrum."/> 
                </main>
            </div>
        </>
    )
}