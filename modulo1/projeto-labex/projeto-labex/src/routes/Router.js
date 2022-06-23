import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHomePage from "../components/AdminHomePage";
import ApplicationFormPage from "../components/ApplicationFormPage";
import CreateTripPage from "../components/CreateTripPage";
import HomePage from "../components/HomePage";
import ListTripsPage from "../components/ListTripsPage";
import LoginPage from "../components/LoginPage";
import TripDetailsPage from "../components/TripDetailsPage";

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<AdminHomePage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
};
