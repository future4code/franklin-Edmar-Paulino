import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LotteriesPage from "../pages/LotteriesPage/LotteriesPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<LotteriesPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
