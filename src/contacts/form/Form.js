import style from "./Form.module.css";


function Form() {
    return (
        <div className={style.formBlock}>
              <form className={style.form}>
                  <input type="text" placeholder="name"/>
                  <input type="text" placeholder="e-mail"/>
                  <textarea name="" rows="7" placeholder="Your message"></textarea>
              </form>
        </div>
    );
}

export default Form;
