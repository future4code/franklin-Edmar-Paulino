import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripsPage, goToLoginPage, goToAdminHomePage } from "../routes/coordinator";

function HomePage() {
    const navigate = useNavigate();
    let logado = true; // alterar para um estado

    return (
        <div>
            <button onClick={() => logado ? goToAdminHomePage(navigate) : goToLoginPage(navigate)}>Área Administrativa</button>
            <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
        </div>
    );
}

export default HomePage;
