import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage";
import LotofacilPage from "../pages/LotofacilPage/LotofacilPage";
import LotomaniaPage from "../pages/LotomaniaPage/LotomaniaPage";
import MegasenaPage from "../pages/MegasenaPage/MegasenaPage";
import QuinaPage from "../pages/QuinaPage/QuinaPage";
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/megasena" element={<MegasenaPage />} />
                <Route path="/quina" element={<QuinaPage />} />
                <Route path="/lotofacil" element={<LotofacilPage />} />
                <Route path="/lotomania" element={<LotomaniaPage />} />
                <Route path="/timemania" element={<TimemaniaPage />} />
                <Route path="/dia-de-sorte" element={<DiaDeSortePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
