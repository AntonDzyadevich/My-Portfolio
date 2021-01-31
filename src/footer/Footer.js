import style from "./Footer.module.css";
import styleContainer from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Anton Dzyadevich</h2>
               <div className={style.icons}>
                   <div className={style.icon}></div>
                   <div className={style.icon}></div>
                   <div className={style.icon}></div>
                   <div className={style.icon}></div>
               </div>
                <h2 className={style.safety}>© 2021 All Rights Reserved.</h2>
            </div>
        </div>
    );
}

export default Footer;