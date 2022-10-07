import React from "react";
import { useNavigate } from "react-router-dom";
import SelectPage from "../../components/SelectPage/SelectPage";
import { goToLotomania } from "../../routes/coordinator";

function LotofacilPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Lotofacil</h1>
            <SelectPage />
            <button onClick={() => goToLotomania(navigate)}>Ir para Lotomania</button>
        </div>
    );
}

export default LotofacilPage;
