import React from "react";
import { useNavigate } from "react-router-dom";
import SelectPage from "../../components/SelectPage/SelectPage";
import { goToTimemania } from "../../routes/coordinator";

function LotomaniaPage() {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Lotomania</h1>
            <SelectPage />
            <button onClick={() => goToTimemania(navigate)}>Ir para Timemania</button>
        </div>
    );
}

export default LotomaniaPage;
