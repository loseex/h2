import style from "./select.module.css";
import {store} from "../../store/store";
import {SelectHalfYear} from "../../store/slices/SelectedHalfYear";

export const Select = () => {
    const handlerOnChange = (value) => store.dispatch(SelectHalfYear(value));
    return (
        <div>
            <select onChange={event => handlerOnChange(event.target.value)} className={style.select}>
                <option value={1}>Первая</option>
                <option value={2}>Вторая</option>
            </select>
        </div>
    )
}
