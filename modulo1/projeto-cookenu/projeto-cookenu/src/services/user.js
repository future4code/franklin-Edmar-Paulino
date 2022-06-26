import axios from "axios"
import { BASE_URL } from "../constants/urls"    
import { goToRecipesList } from "../routes/coordinator"

export function login(body, clear, navigate) {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
        })
        .catch((error) => {
            alert("Usuário ou senha inválidos!")
        })
}

export function signUp(body, clear, navigate) {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
        })
        .catch((error) => {
            alert("Error ao efetuar cadastro!\nAguarde um pouco e tente novamente.")
        })
}
