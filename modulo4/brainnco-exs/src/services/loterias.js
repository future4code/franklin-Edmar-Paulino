import axios from "axios";
import { BASE_URL } from "../constants/urls";

export function getLoterias() {
    axios.get(`${BASE_URL}/loterias`)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
}

export function getLoteriasConcursos() {
    axios.get(`${BASE_URL}/loterias-concursos`)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}

export function getConcurso(id) {
    axios.get(`${BASE_URL}/concursos/${id}`)
        .then(response => console.log(response.data))
        .catch(error => console.error(error));
}