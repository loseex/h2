import style from "./preloader.module.css";
export const Preloader = () => (
    <div className={style.preloader}>
        <div className={style.lds__default}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
)
