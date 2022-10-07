import React, { useState } from "react";
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData";
import { getContests } from "../../services/loterias";
import { ContestNumbersContainer, LotteryInfoContainer, ScreenContainer } from "./styled";

function LotteriesPage() {
    const lotteries = useRequestData([], `${BASE_URL}/loterias`);
    const lotteryContests = useRequestData([], `${BASE_URL}/loterias-concursos`);
    const [contest, setContest] = useState({});

    const getContestId = (lotteryId) => {
        const [contestId] = lotteryContests.filter((lottery) => lottery.loteriaId === lotteryId);

        return contestId.concursoId;
    }
    
    const handleSelect = (event) => {
        const lotteryId = Number(event.target.value);
        const contestId = getContestId(lotteryId);
        getContests(contestId, setContest);
    };

    const getFormattedDate = (dateString) => {
        const date = new Date(contest.data);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
    }

    return (
        <ScreenContainer>
            <LotteryInfoContainer>
                <h1>Loterias</h1>
                <select onChange={handleSelect}>
                    {
                        lotteries.length > 0 
                        && lotteries.map((lottery) => {
                            return (
                                <option key={lottery.id} value={lottery.id}>
                                    {lottery.nome.toUpperCase()}
                                </option>
                            );
                        })
                    }
                </select>
                <div>
                    <p>Concurso</p>
                    <p>{contest.id && `${contest.id} - ${getFormattedDate(contest.data)}`}</p>
                </div>
            </LotteryInfoContainer>
            <ContestNumbersContainer>
                <div>
                    {
                        contest.id
                        && contest.numeros.map((number) => {
                            return (
                                <p key={number}>{number}</p>
                            );
                        })
                    }
                </div>
            </ContestNumbersContainer>
        </ScreenContainer>
    );
}

export default LotteriesPage;
