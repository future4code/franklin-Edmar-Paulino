import React from "react"
import Button from "../../components/Button/Button"
import { Title } from "../../components/Title/styled"
import { ListButtonContainer, ListContainer, TripContainer } from "./styled"

function ListTripsPage() {
    return (
        <ListContainer>
            <Title>Lista de Viagens</Title>
            <TripContainer>
                <p>Nome: Pegando um bronze em Mercúrio</p>
                <p>Descrição: Que tal aproveitar o solzinho de Mercúrio</p>
                <p>Planeta: Mercúrio</p>
                <p>Duração: 10 dias</p>
                <p>18-10-2022</p>
            </TripContainer>
            <TripContainer>
                <p>Nome: Pegando um bronze em Mercúrio</p>
                <p>Descrição: Que tal aproveitar o solzinho de Mercúrio</p>
                <p>Planeta: Mercúrio</p>
                <p>Duração: 10 dias</p>
                <p>Data: 18-10-2022</p>
            </TripContainer>
            <ListButtonContainer>
                <Button textContent={"Inscreva-se"} />
                <Button textContent={"Home"} />
            </ListButtonContainer>
        </ListContainer>
    )
}

export default ListTripsPage
