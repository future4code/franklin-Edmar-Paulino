import styled from "styled-components";
import { BACKGROUND_COLOR, BLACK_TEXT_COLOR, MEGA_SENA_COLOR, WHITE_TEXT_COLOR } from "../../constants/colors";
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');


export const LotteriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    min-width: 100px;
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
    background-color: ${MEGA_SENA_COLOR};
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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;

    .contest-footer-waring {
        color: ${BLACK_TEXT_COLOR};
        font-size: 16px;
        font-weight: 400;
        position: relative;
        bottom: 96px;
        text-align: center;
    }
`;
