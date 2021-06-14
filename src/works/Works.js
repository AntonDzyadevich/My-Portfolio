import React from "react";
import style from "./Works.module.scss"
import styleContainer from "../common/styles/Container.module.scss";
import Work from "./work/Work";
import Title from "../common/components/title/Title";
import todoImage from "../assets/image/Todolist.png";
import socialImage from "../assets/image/social-network.png";




function Works() {
    const social = {
        backgroundImage: `url(${socialImage})`,
    };

    const todolist= {
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title text={"Projects"}/>
                <div className={style.works}>
                    <Work style={todolist} button={"View"} title={"TodoList"} description={"description this tbtbtbtb"}/>
                    <Work style={social} button={"View"} title={"Social Network"} description={"description If you’re interested in playing around " +
                    "with React, you can use an online code playground. " +
                    "Try a Hello World template on CodePen, CodeSandbox, or Stackblitz."} />
                </div>
            </div>
        </div>
    );
}

export default Works;