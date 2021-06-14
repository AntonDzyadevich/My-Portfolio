import React from "react";
import style from "./Work.module.scss"


function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.picture} style={props.style}>
                <button className={style.button}>{props.button}</button>
            </div>
            <div className={style.projectInfo}>
                <h4 className={style.projectTitle}>{props.title}</h4>
                <span className={style.description}>{props.description}</span>
            </div>


        </div>

    );
}

export default Work;