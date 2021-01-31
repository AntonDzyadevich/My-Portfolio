import React from "react";
import style from "./Work.module.css"


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.picture}>
                <button className={style.button}>{props.button}</button>
            </div>
                <h4>{props.title}</h4>
                <span>{props.description}</span>

        </div>

    );
}

export default Work;