import {createContext, useState} from "react";
import {Preloader} from "../components/Preloader/Preloader";
import {Provider} from "react-redux";
import {store} from "../store/store";

import "../css/global.css";
import "../css/bootstrap.min.css";

export const GlobalContext = createContext(null);

export default function ({Component, pageProps}) {
    const [ShowPreloader, updateStatePreloader] = useState<boolean>(true);
    const [ShowContainer, updateStateContainer] = useState<boolean>(false);

    const ContextValue = {
        ShowPreloader,
        updateStatePreloader,
        ShowContainer,
        updateStateContainer,
    }

    return (
        <Provider store={store}>
            <GlobalContext.Provider value={ContextValue}>
                {ShowPreloader ? <Preloader /> : <></>}
                <Component {...pageProps} />
            </GlobalContext.Provider>
        </Provider>
    )
}