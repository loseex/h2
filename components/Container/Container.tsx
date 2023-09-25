import style from "./container.module.css";
import {useContext} from "react";
import {GlobalContext} from "../../pages/_app";
import {PlacemarkType} from "../../types/Placemark.type";
import {useSelector} from "react-redux";
import {RootState, store} from "../../store/store";
import {SelectedPointClear} from "../../store/slices/SelectedContent";

export const Container = () => {
    const { ShowContainer, updateStateContainer } = useContext(GlobalContext);
    const content: PlacemarkType = useSelector((state: RootState) => state.SelectedPoint.value);

    const handlerCloseContainer = () => {
        store.dispatch(SelectedPointClear());
        updateStateContainer(false);
    }

    if (!ShowContainer) return <div></div>;

    return (
        <div className={style.container}>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <img className={style.icon} src={content.icon} alt="" />
                <button onClick={handlerCloseContainer} className={style.close__button}>✕</button>
            </div>
            <div className="mb-5">
                <img className={`${style.banner__image} mb-3`} src={content.info.image} alt="" loading="lazy" />
                <h2 className="mb-3">{content.info.title}</h2>
                <p className="mb-3">{content.info.date}</p>
                <p>{content.info.description}</p>
            </div>
            <div>
                <input onClick={() => {
                    window.location.href = `/articles/${content.id}`;
                }} className={style.button} type="button" value="Подробнее" />
            </div>
        </div>
    )
}