import { useEffect, useState } from "react"
import axios from "axios"

function useRequestData(initalData, url) {
    const [data, setData] = useState(initalData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
            setData(response.data)
        }).catch((error) => {
            alert("Ocorreu um erro, tente novamente")
            console.log(error.response)
        })
    }, [url])

    return data
}

export default useRequestData
