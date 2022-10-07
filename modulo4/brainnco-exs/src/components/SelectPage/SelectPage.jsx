import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import GlobalStateContext from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";

function SelectPage() {
    const { state, setter } = useContext(GlobalStateContext);
    const lotteries = useRequestData([], `${BASE_URL}/loterias`)
    const navigate = useNavigate();

    const handleSelectedPage = (event) => {
        const page = event.target.value;

        console.log(event.target);
        setter(page);
        navigate(`/${page.toLowerCase().replaceAll(' ', '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`);
    };

    return (
        <select value={state} onChange={handleSelectedPage}>
            {
                lotteries.length > 0
                && lotteries.map(lottery => {
                    return (
                        <option key={lottery.id} value={lottery.nome}>
                            {lottery.nome.toUpperCase()}
                        </option>
                    )
                })
            }
        </select>
    );
}

export default SelectPage;
