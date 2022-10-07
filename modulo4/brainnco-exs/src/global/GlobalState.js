import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

function GlobalState({ children }) {
    const [selectedPage, setSelectedPage] = useState("");
    const state = selectedPage;
    const setter = setSelectedPage;

    return (
        <GlobalStateContext.Provider value={{ state, setter }}>
            {children}
        </GlobalStateContext.Provider>
    );
}

export default GlobalState;
