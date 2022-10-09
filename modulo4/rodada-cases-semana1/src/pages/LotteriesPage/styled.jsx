import styled from "styled-components";
import { BACKGROUND_COLOR, BLACK_TEXT_COLOR, MEGA_SENA_COLOR, WHITE_TEXT_COLOR } from "../../constants/colors";
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');


export const LotteriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    min-width: 1000px;
    background-color: ${BACKGROUND_COLOR};
`;

export const LotteriesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 613px;
    min-width: 500px;
    max-width: 613px;
    height: 100%;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : MEGA_SENA_COLOR)};    
    padding: 96px;
    box-sizing: border-box;
`;

export const SelectLottery = styled.select`
    width: 215px;
    height: 45px;
    padding-left: 23px;
    border-radius: 5px;
    border: none;
`;

export const LotteryTitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
`;

export const LogoImage = styled.img`
    width: 60px;
`;

export const LotteryTitle = styled.h1`
    color: ${WHITE_TEXT_COLOR};
    font-size: 30px;
    margin-left: 20px;
    font-weight: 700;
`;

export const LotteryInfoFooter = styled.div`
    color: ${WHITE_TEXT_COLOR};

    .contest {
        font-size: 14px;
        font-weight: 500;
    }

    .contest-info {
        font-size: 20px;
        font-weight: 700;
        margin-top: 14px;
    }
`;

export const ContestContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContestNumbersContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 70%;
`;

export const ContestFooterContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 10px;
    color: ${BLACK_TEXT_COLOR};
    font-size: 16px;
    font-weight: 400;
    bottom: 96px;
`;
