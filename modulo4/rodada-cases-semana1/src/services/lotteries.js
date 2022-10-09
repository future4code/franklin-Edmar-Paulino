import axios from "axios";
import { BASE_URL } from "../constants/urls";

export function getLotteries(setLotteries) {
    axios.get(`${BASE_URL}/loterias`)
        .then(response => setLotteries(response.data))
        .catch(error => console.log(error));
}

export function getLotteryContests(setLotteryContests) {
    axios.get(`${BASE_URL}/loterias-concursos`)
        .then(response => setLotteryContests(response.data))
        .catch(error => console.error(error));
}

export function getContests(id, setContest) {
    axios.get(`${BASE_URL}/concursos/${id}`)
        .then(response => setContest(response.data))
        .catch(error => console.error(error));
}
