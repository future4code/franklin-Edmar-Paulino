import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLotofacil } from "../../routes/coordinator";

function QuinaPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Quina</h1>
            <button onClick={() => goToLotofacil(navigate)}>Ir para Lotofacil</button>
        </div>
    );
}

export default QuinaPage;
