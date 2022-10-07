import axios from "axios";
import { useEffect, useState } from "react";

function useRequestData(initalData, url) {
    const [data, setData] = useState(initalData);

    useEffect(() => {
        axios.get(url)
        .then(res => setData(res.data))
        .catch(err => console.error(err.response.data.message))
    }, [url]);

    return data;
}

export default useRequestData;
