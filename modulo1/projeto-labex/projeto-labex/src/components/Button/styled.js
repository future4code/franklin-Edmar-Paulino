import styled from "styled-components"

export const ButtonContainer = styled.button`
    background-color: ${props => props.color ? props.color : "white"};
    margin: 10px;
    width: 180px;
    height: 50px;
    border-radius: 5px;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: none;
`