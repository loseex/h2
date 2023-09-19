import style from "./overlay.module.css";
export const Overlay = ({children}) => {
    return <div children={children} className={style.overlay} />
}
