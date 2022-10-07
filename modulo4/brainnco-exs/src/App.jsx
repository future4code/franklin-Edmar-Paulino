import React from "react";
import GlobalState from "./global/GlobalState";
import GlobalStateContext from "./global/GlobalStateContext";
import Router from "./routes/Router";

function App() {
    return (
        <GlobalState>
            <Router />
        </GlobalState>
    );
}

export default App;
