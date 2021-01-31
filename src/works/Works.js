import React from "react";
import style from "./Works.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Work from "./work/Work";


function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Work button={"View"} title={"TodoList"} description={"description this tbtbtbtb"}/>
                    <Work  button={"View"} title={"Social Network"} description={"description If you’re interested in playing around " +
                    "with React, you can use an online code playground. " +
                    "Try a Hello World template on CodePen, CodeSandbox, or Stackblitz."} />
                </div>
            </div>
        </div>
    );
}

export default Works;