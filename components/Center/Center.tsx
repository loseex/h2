import style from "./center.module.css";
export const Center = ({children}) => {
    return <div className={style.center__column} children={children} />
}
