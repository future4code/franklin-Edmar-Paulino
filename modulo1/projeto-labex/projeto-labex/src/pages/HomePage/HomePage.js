import React from "react"
import Button from "../../components/Button/Button"
import { ButtonContainer, HomeContainer, HomeTitle } from "./styled"

function HomePage() {
    return (
        <HomeContainer>
            <HomeTitle>Bem vinde à LabeX</HomeTitle>
            <ButtonContainer>
                <Button textContent={"Área administrativa"}/>
                <Button textContent={"Lista de Viagens"}/>
            </ButtonContainer>
        </HomeContainer>
    )
}

export default HomePage
