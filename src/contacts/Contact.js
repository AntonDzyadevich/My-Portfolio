import style from "./Contact.module.css";
import styleContainer from "../common/styles/Container.module.css";
import Form from "./form/Form";


function Contact() {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h2 className={style.title}>Contact</h2>
                < Form />
                <button type="submit">Send Message</button>
            </div>
        </div>
    );
}

export default Contact;
