import styled from "styled-components";
import { BACKGROUND_COLOR, BLACK_TEXT_COLOR, MEGA_SENA_COLOR, WHITE_TEXT_COLOR } from "../../constants/colors";
// @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');


export const LotteriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    
    @media (max-width: 1024px) {
        flex-direction: column;
        max-width: 100vw;
    }
`;

export const LotteriesInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 613px;
    height: 100%;
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : MEGA_SENA_COLOR)};    
    padding: 96px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        width: 100vw;
        height: 500px;
        align-items: center;
        padding: 50px 0px;
    }
`;

export const SelectLottery = styled.select`
    width: 215px;
    height: 45px;
    min-height: 45px;
    padding-left: 23px;
    border-radius: 5px;
    border: none;
    font-size: 15px;
    font-weight: 500;
`;

export const LotteryTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1024px) {
        flex-direction: column;
        max-width: 100vw;
        margin: 84px 0px;
    }
`;

export const LogoImage = styled.img`
    width: 60px;
`;

export const LotteryTitle = styled.h1`
    color: ${WHITE_TEXT_COLOR};
    font-size: 30px;
    margin-left: 20px;
    font-weight: 700;

    @media (max-width: 1024px) {
        margin: 12px 0px 0px 0px;
    }
`;

export const LotteryInfoFooter = styled.div`
    color: ${WHITE_TEXT_COLOR};

    .contest-desktop {
        font-size: 14px;
        font-weight: 500;
    }

    .contest-mobile {
        font-size: 14px;
        font-weight: 500;
        display: none;
    }

    .contest-info {
        font-size: 20px;
        font-weight: 700;
        margin-top: 14px;
    }

    @media (max-width: 1024px) {
        .contest-desktop, .contest-info {
            display: none;
        }

        .contest-mobile {
            display: flex;
        }
    }
`;

export const ContestContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${BACKGROUND_COLOR};
`;

export const ContestNumbersContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 70%;

    @media (max-width: 1024px) {
        height: 100%;
        margin: unset;
        padding: 10px;
    }
`;

export const ContestFooterContainer = styled.div`
    position: relative;
    text-align: center;
    padding: 10px;
    color: ${BLACK_TEXT_COLOR};
    font-size: 16px;
    font-weight: 400;
    bottom: 96px;

    @media (max-width: 1024px) {
        padding: 0px 104px 37px;
        position: unset;
    }
`;
