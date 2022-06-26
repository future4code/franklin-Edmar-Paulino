import React, { useState } from "react"
import { TextField, Button, CircularProgress } from "@mui/material"
import { InputsContainer, AddRecipeFormContainer } from "./styled"
import useForm from "../../hooks/useForm"
import { createRecipe } from "../../services/recipe"


function AddRecipesForm() {
    const [form, handleInputChange, clear] = useForm({ title: "", description: "", image: "" })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createRecipe(form, clear, setIsLoading)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddRecipeFormContainer>
                <InputsContainer>
                <TextField
                    name={"title"}
                    value={form.title}
                    onChange={handleInputChange}
                    label={"Título"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    name={"description"}
                    value={form.description}
                    onChange={handleInputChange}
                    label={"Descrição"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <TextField
                    name={"image"}
                    value={form.image}
                    onChange={handleInputChange}
                    label={"Foto"}
                    variant={"outlined"}
                    fullWidth
                    margin={"normal"}
                    required
                />
                <Button
                    type={"submit"}
                    variant={"contained"}
                    color={"primary"}
                    fullWidth
                    margin={"normal"}
                >
                    {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Adicionar Receita</>}
                </Button>
                </InputsContainer>
            </AddRecipeFormContainer>
        </form>
    )
}

export default AddRecipesForm
