import axios from "axios"
import { BASE_URL } from "../constants/urls"    
import { goToRecipesList } from "../routes/coordinator"

export function login(body, clear, navigate, setRightButtonText, setIsLoading) {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/login`, body)
    .then((response) => {
        setIsLoading(false)
        localStorage.setItem("token", response.data.token)
        clear()
        goToRecipesList(navigate)
        setRightButtonText("Logout")
    })
    .catch((error) => {
        setIsLoading(false)
        alert(error.response.data.message)
    })
}

export function signUp(body, clear, navigate, setRightButtonText, setIsLoading) {
    setIsLoading(true)
    axios.post(`${BASE_URL}/user/signup`, body)
        .then((response) => {
            setIsLoading(false)
            localStorage.setItem("token", response.data.token)
            clear()
            goToRecipesList(navigate)
            setRightButtonText("Logout")
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.response.data.message)
        })
}
