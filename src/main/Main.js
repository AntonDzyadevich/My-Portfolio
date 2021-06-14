import style from "./Main.module.css";
import React from "react";
import styleContainer from "../common/styles/Container.module.scss"


function Main () {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Anton Dzyadevich</h1>
                    <p>React Developer.</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Main;
