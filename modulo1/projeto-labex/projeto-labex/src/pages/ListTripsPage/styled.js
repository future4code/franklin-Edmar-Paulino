import styled from "styled-components"
import { BACKGROUND } from "../../constants/colors"

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TripContainer = styled.div`
    background-color: ${BACKGROUND};
    padding: 40px;
    border-radius: 5px;
    margin: 20px 0;
`

export const ListButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin: 20px;
`

