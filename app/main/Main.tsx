import React from 'react'
import back from './background.png'
import style from './Main.module.css'

export const Main = () => {
    return (
        <div className="main_wrap">
        <div className={"text-center"}>
            <h1 className='text-gray-800 text-center font-Blinker text-3xl font-semibold leading-tight pt-[40px]'>Managen Sie Ihr Unternehmen im Web
            </h1>
            <p className='w-[70%] mx-auto text-gray-800 text-center font-Blinker text-lg font-normal'>mit einem voll-interaktiven, mehrsprachigen Industrieprofil
                Treten Sie jetzt der Warteliste bei und sichern Sie sich einen 50% Frühbucher-Rabatt</p>
            <button className='w-[360px] h-[56px] bg-red-600 text-white mx-auto my-4 mb-40'>Jetzt Rabatt sichern</button>
        </div>
        <div className={"bg-[rgba(237, 241, 247, 0.50)]"}>

        </div>
        </div>
    )
}
