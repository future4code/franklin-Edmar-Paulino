import React, { useEffect, useState } from "react";
import Ellipse from "../../components/Ellipse/Ellipse";
import { getContests, getLotteries, getLotteryContests } from "../../services/lotteries";
import { ContestContainer, LogoImage, LotteriesContainer, LotteriesInfoContainer, LotteryInfoFooter, LotteryTitle, LotteryTitleContainer, SelectLottery } from "./styled";
import logo from "../../assets/logo.svg";
import { FOOTER_WARNING } from "../../constants/colors";

function LotteriesPage() {
    const [lotteries, setLotteries] = useState([]);
    const [lotteryContests, setLotteryContests] = useState([]);
    const [contest, setContest] = useState({});
    const [lotteryName, setLotteryName] = useState("");

    useEffect(() => {
        getLotteries(setLotteries);
        getLotteryContests(setLotteryContests);
    }, []);

    useEffect(() => {
        if (lotteries.length > 0 && lotteryContests.length > 0) {
            const lottery = lotteries[0];
            setLotteryName(lottery.nome.toUpperCase());
            const contest = lotteryContests[0];
            const contestId = contest.concursoId;
            getContests(contestId, setContest);
        }
    }, [lotteries, lotteryContests]);
  
    const handleSelect = (event) => {
        const lotteryId = Number(event.target.value);
        const lottery = lotteries.find((lottery) => lottery.id === lotteryId);
        setLotteryName(lottery.nome.toUpperCase());
        const contest = lotteryContests.find(lottery => lottery.loteriaId === lotteryId);
        const contestId = contest.concursoId;
        getContests(contestId, setContest);
    };

    const getFormattedDate = () => {
        const date = new Date(contest.data);
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        return `${day < 10 ? "0" + day : day}/${month < 10 ? "0" + month : month}/${year}`;
    };

    return (
        <LotteriesContainer>
            <LotteriesInfoContainer>
                <SelectLottery onChange={handleSelect}>
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
                </SelectLottery>
                <LotteryTitleContainer>
                    <LogoImage src={logo} />
                    <LotteryTitle>{lotteryName}</LotteryTitle>
                </LotteryTitleContainer>
                <LotteryInfoFooter>
                    <p className="contest">Concurso</p>
                    <p className="contest-info">{contest.id && `${contest.id} - ${getFormattedDate(contest.data)}`}</p>
                </LotteryInfoFooter>
            </LotteriesInfoContainer>
            <ContestContainer>
                {
                    contest.id
                    && contest.numeros.map((number) => {
                        return (
                            <Ellipse key={number} text={number} />
                        );
                    })
                }
                <p className="contest-footer-waring">{FOOTER_WARNING}</p>
            </ContestContainer>
        </LotteriesContainer>
    );
}

export default LotteriesPage;
