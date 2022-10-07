import axios from "axios";
import { BASE_URL } from "../constants/urls";

export function getLotteries() {
    axios.get(`${BASE_URL}/loterias`)
        .then(response => response.data)
        .catch(error => console.log(error));
}

export function getLotteryContests() {
    axios.get(`${BASE_URL}/loterias-concursos`)
        .then(response => response.data)
        .catch(error => console.error(error));
}

export function getContests(id, setContest) {
    axios.get(`${BASE_URL}/concursos/${id}`)
        .then(response => setContest(response.data))
        .catch(error => console.error(error));
}