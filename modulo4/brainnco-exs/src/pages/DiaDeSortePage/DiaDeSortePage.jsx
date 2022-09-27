import React from "react";
import { useNavigate } from "react-router-dom";
import { goToMegasena } from "../../routes/coordinator";

function DiaDeSortePage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Dia de Sorte</h1>
            <button onClick={() => goToMegasena(navigate)}>Ir para Mega-sena</button>
        </div>
    );
}

export default DiaDeSortePage;
