import {Map, YMaps} from "@pbe/react-yandex-maps";
import style from "./minimap.module.css";
import {PlacemarkType} from "../../types/Placemark.type";
import {useContext} from "react";
import {GlobalContext} from "../../pages/_app";
import {Marker} from "../Marker/Marker";
import Link from "next/link";

export const MiniMap = (content: PlacemarkType) => {
    const { updateStatePreloader } = useContext(GlobalContext);

    return (
        <YMaps>
            <Map onLoad={() => updateStatePreloader(false)} className={style.mini__map} {...{defaultState: {center: content.location, zoom: 6, type: "yandex#map",}, options: {maxZoom: 16, minZoom: 4, yandexMapDisablePoiInteractivity: false}}}>
                <Link href={"/"} className={style.overlay}>
                    <p>Вернуться на карту</p>
                </Link>
                <Marker {...content} />
            </Map>
        </YMaps>
    )
}