import React from "react";
import { useNavigate } from "react-router-dom";
import { goToDiaDeSorte } from "../../routes/coordinator";

function TimemaniaPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Timemania</h1>
            <button onClick={() => goToDiaDeSorte(navigate)}>Ir para Dia de Sorte</button>
        </div>
    );
}

export default TimemaniaPage;
