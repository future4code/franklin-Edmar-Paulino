import React from "react"
import { Button } from "@mui/material"
import useProtectedPage from "../../hooks/useProtectedPage"
// import { useNavigate } from "react-router-dom"
// import { goToSignUp } from "../../routes/coordinator"

function RecipesListPage() {
    useProtectedPage()
    // const navigate = useNavigate()
    //  onClick={() => goToSignUp(navigate)}

    return (
        <div>
            <h1>RecipesListPage</h1>
            <Button variant="contained" color="primary">Primary</Button>
        </div>
    )
}

export default RecipesListPage
