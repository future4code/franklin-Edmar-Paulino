import React, { useEffect, useState } from "react";
import Ellipse from "../../components/Ellipse/Ellipse";
import { getContests, getLotteries, getLotteryContests } from "../../services/lotteries";
import { ContestContainer, ContestFooterContainer, ContestNumbersContainer, LogoImage, LotteriesContainer, LotteriesInfoContainer, LotteryInfoFooter, LotteryTitle, LotteryTitleContainer, SelectLottery } from "./styled";
import logo from "../../assets/logo.svg";
import { DIA_DE_SORTE_COLOR, FOOTER_WARNING, LOTOFACIL_COLOR, LOTOMANIA_COLOR, MEGA_SENA_COLOR, QUINA_COLOR, TIMEMANIA_COLOR } from "../../constants/colors";

function LotteriesPage() {
    const [lotteries, setLotteries] = useState([]);
    const [lotteryContests, setLotteryContests] = useState([]);
    const [contest, setContest] = useState({});
    const [lotteryName, setLotteryName] = useState("");
    const [lotteryColor, setLotteryColor] = useState(MEGA_SENA_COLOR);

    const lotteryColors = [
        MEGA_SENA_COLOR,
        QUINA_COLOR,
        LOTOFACIL_COLOR,
        LOTOMANIA_COLOR,
        TIMEMANIA_COLOR,
        DIA_DE_SORTE_COLOR
    ];

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
        setLotteryColor(lotteryColors[lotteryId]);
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
            <LotteriesInfoContainer backgroundColor={lotteryColor}>
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
                    <p className="contest-desktop">CONCURSO</p>
                    <p className="contest-mobile">{`CONCURSO Nº ${contest.id }`} </p>
                    <p className="contest-info">{contest.id && `${contest.id} - ${getFormattedDate(contest.data)}`}</p>
                </LotteryInfoFooter>
            </LotteriesInfoContainer>
            <ContestContainer>
                <ContestNumbersContainer>
                    {
                        contest.id
                        && contest.numeros.map((number) => {
                            return (
                                <Ellipse key={number} text={number} />
                            );
                        })
                    }
                </ContestNumbersContainer>
                <ContestFooterContainer>
                    <p className="contest-footer-waring">{FOOTER_WARNING}</p>
                </ContestFooterContainer>
            </ContestContainer>
        </LotteriesContainer>
    );
}

export default LotteriesPage;
