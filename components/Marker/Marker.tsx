import {Placemark} from "@pbe/react-yandex-maps";
import {PlacemarkType} from "../../types/Placemark.type";
import {useContext} from "react";
import {GlobalContext} from "../../pages/_app";
import {store} from "../../store/store";
import {SelectPoint} from "../../store/slices/SelectedContent";

export const Marker = (content: PlacemarkType) => {
    const { updateStateContainer } = useContext(GlobalContext);

    const handlerClick = () => {
        store.dispatch(SelectPoint(content))
        updateStateContainer(true);
    };

    return (
        <Placemark
            geometry={content.location}
            options={{iconLayout: "default#image", iconImageHref: content.icon, iconOffset: [-5, 0]}}
            onClick={handlerClick}
        />
    )
}