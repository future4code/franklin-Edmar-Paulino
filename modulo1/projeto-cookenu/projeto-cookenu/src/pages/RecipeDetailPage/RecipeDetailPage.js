import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import { useParams } from "react-router-dom"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { RecipeContainer, RecipeImage, ScreenContainer } from "./styled"
import { Typography } from "@mui/material"

function RecipeDetailPage() {
    useProtectedPage()

    const { id } = useParams()
    const [recipe] = useRequestData([], `${BASE_URL}/recipe/${id}`)
    console.log(recipe)
    return (
        <ScreenContainer>
            { recipe && <RecipeContainer>
                <RecipeImage src={recipe.image}/>
                <Typography gutterBottom align={"center"} variant={"h5"} color={"primary"}>{recipe.title}</Typography>
                <Typography align={"center"}>{recipe.description}</Typography>
            </RecipeContainer> }
        </ScreenContainer>
    )
}

export default RecipeDetailPage
