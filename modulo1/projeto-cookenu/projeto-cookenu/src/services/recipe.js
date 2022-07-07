import axios from "axios"
import { BASE_URL } from "../constants/urls"

export function createRecipe(body, clear, setIsLoading) {
    setIsLoading(true)
    axios.post(`${BASE_URL}/recipe`, body, {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    })
        .then((response) =>{
            setIsLoading(false)
            clear()
            alert(response.data.message)
        })
        .catch((error) => {
            setIsLoading(false)
            alert(error.response.data.message)
        })
}
