import React from "react"
import useProtectedPage from "../../hooks/useProtectedPage"
import RecipeCard from "../../components/RecipeCard/RecipeCard"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { AddRecipeButton, RecipeListContainer } from "./styled"
import { Add } from "@mui/icons-material"
import { goToAddRecipes, goToRecipeDetail } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

function RecipesListPage() {
    useProtectedPage()
    const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)
    const navigate = useNavigate()

    const recipeCards = recipes.map((recipe) => {
        return (
            <RecipeCard
                key={recipe.recipe_id}
                title={recipe.title}
                image={recipe.image}
                onClick={() => goToRecipeDetail(navigate, recipe.recipe_id)}
            />
        )
    })

    return (
        <RecipeListContainer>
            {recipeCards}
            <AddRecipeButton
                color={"primary"}
                onClick={() => goToAddRecipes(navigate)}
            >
                <Add />
            </ AddRecipeButton>
        </RecipeListContainer>
    )
}

export default RecipesListPage
