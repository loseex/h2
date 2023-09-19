import style from "./map.module.css";
export const MapConfig = {
    className: style.map,
    defaultState: {
        center: [43.315345930160056, 26.48338234315026],
        zoom: 6,
        type: "yandex#map",
    },
    options: {
        maxZoom: 16,
        minZoom: 4,
        yandexMapDisablePoiInteractivity: false
    }
}