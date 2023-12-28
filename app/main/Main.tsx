import React from 'react'
import back from './background.png'
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className={style.main_wrap}>
        <div className={style.wrap}>
            <h1>Managen Sie Ihr Unternehmen im Web
            </h1>
            <p>mit einem voll-interaktiven, mehrsprachigen Industrieprofil
                Treten Sie jetzt der Warteliste bei und sichern Sie sich einen 50% Frühbucher-Rabatt</p>
            <button>Jetzt Rabatt sichern</button>
        </div>
        <div className={style.carousel_wrap}>

        </div>
        </div>
    )
}
