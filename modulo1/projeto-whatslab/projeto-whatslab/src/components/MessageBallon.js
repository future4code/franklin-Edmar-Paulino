import React from "react"
import styled from "styled-components"

const BallonContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
`

const BallonContainerRight = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
`

const BallonLeft = styled.p`
    background-color: #ffffff;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
`

const BallonRight = styled.p`
    background-color: #dcf8c7;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
`

function MessageBallon(props) {
    if (props.username.toLowerCase() === "eu") {
        return (
            <BallonContainerRight>
                <BallonRight>{props.message}</BallonRight>
            </BallonContainerRight>
        )
    } else {
        return (
            <BallonContainerLeft>
                <BallonLeft>{`${props.username}: ${props.message}`}</BallonLeft>
            </BallonContainerLeft>
        )
    }
}

export default MessageBallon;
