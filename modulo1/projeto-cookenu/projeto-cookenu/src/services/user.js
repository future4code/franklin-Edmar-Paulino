import axios from "axios"
import { BASE_URL } from "../constants/urls"    
import { goToRecipesList } from "../routes/coordinator"

export function login(body, clear, navigate, setRightButtonText) {
    axios.post(`${BASE_URL}/user/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}

export function signUp(body, clear, navigate, setRightButtonText) {
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((error) => {
            alert(error.response.data.message)
        })
}
