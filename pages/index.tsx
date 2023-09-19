import {Main} from "../components/Main";
import {MapComponent} from "../components/Map/Map";
import {Overlay} from "../components/Overlay/Overlay";
import {Container} from "../components/Container/Container";
import {Select} from "../components/Select/Select";

const MapPage = () => {
    return (
        <Main title="Карта">
            <Overlay>
                <Container />
                <Select />
            </Overlay>
            <MapComponent />
        </Main>
    )
}

export default MapPage;