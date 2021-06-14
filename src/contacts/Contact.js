import style from "./Contact.module.css";
import styleContainer from "../common/styles/Container.module.scss";
import Form from "./form/Form";
import Title from "../common/components/title/Title";
import React from "react";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text={"Contact"}/>
                < Form />
                <button type="submit">Send Message</button>
            </div>
        </div>
    );
}

export default Contact;
