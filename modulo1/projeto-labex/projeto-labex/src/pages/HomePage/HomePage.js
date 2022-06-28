import React from "react"
import { useNavigate } from "react-router-dom"
import { goToListTripsPage, goToAdminHomePage } from "../../routes/coordinator"
import { HomeContainer, HomeTitle } from "./styled"

function HomePage() {
    const navigate = useNavigate()

    return (
        <HomeContainer>
            <HomeTitle>Bem vinde à LabeX</HomeTitle>
            <button onClick={() => goToAdminHomePage(navigate)}>Área Administrativa</button>
            <button onClick={() => goToListTripsPage(navigate)}>Lista de Viagens</button>
        </HomeContainer>
    )
}

export default HomePage
