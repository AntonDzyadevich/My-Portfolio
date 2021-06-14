import React from "react";
import style from "./Remote.module.css";
import styleContainer from "../common/styles/Container.module.scss";


function Remote() {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h2 className={style.title}>I am available for Freelancer</h2>
                <div className={style.remoteBut}>
                    <button className={style.button}>Hire me</button>
                </div>

            </div>
        </div>
    );
}

export default Remote;