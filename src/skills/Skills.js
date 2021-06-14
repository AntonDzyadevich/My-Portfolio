import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.scss"
import Skill from "./Skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"Java Script"} description={"Neque porro quisquam est qui dolorem ipsum t..."}/>
                    <Skill title={"Css"} description={"Lorem ipsum dolor sit amet."}/>
                    <Skill title={"React"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;