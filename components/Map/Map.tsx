import {Map, YMaps} from "@pbe/react-yandex-maps";
import {MapConfig} from "./map.config";
import {PropsWithChildren, useContext, useEffect, useRef, useState} from "react";
import {Marker} from "../Marker/Marker";
import points from "../../public/source/placemarks.json";
import {PlacemarkType} from "../../types/Placemark.type";
import {GlobalContext} from "../../pages/_app";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const MapComponent = () => {
    const SelectedHalfYear = useSelector((state: RootState) => state.SelectedHalfYear.value)
    const { updateStatePreloader } = useContext(GlobalContext);
    const [PlaceMarks, updatePlaceMarks] = useState<PlacemarkType[]>([]);
    const [ShowPlaceMarks, updateShowPlaceMarks] = useState<PlacemarkType[]>([]);

    const MapRef = useRef(null);
    const SelectedHalfYearRef = useRef(null);

    useEffect(() => {
        const connectJson = async () => {
            await updatePlaceMarks(points as PlacemarkType[]);
            SelectedHalfYearRef.current = SelectedHalfYear;
        }
        connectJson().catch(err => console.log(err));
    }, [])

    useEffect(() => {
        if (SelectedHalfYearRef.current !== SelectedHalfYear) {
            updateShowPlaceMarks(PlaceMarks.filter((item) => Number(item.half) == Number(SelectedHalfYear)));
            SelectedHalfYearRef.current = SelectedHalfYear;
        }
    }, [SelectedHalfYear])

    const onLoadMap = () => {
        updateShowPlaceMarks(PlaceMarks.filter((item) => item.half == Number(SelectedHalfYear)));
        updateStatePreloader(false);
    }

    return (
        <YMaps query={{lang: "ru_RU"}}>
            <Map instanceRef={MapRef} {...MapConfig as PropsWithChildren} onLoad={() => onLoadMap()}>
                {ShowPlaceMarks.map(point => (
                    <Marker key={point.id} {...point} />
                ))}
            </Map>
        </YMaps>
    )
}