import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [wordsData, setWordsData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) {
                throw new Error(`네트워크 연결 안됨 ${res.status}`);
            }
            return res.json()
        })
        .then(data => {
            setWordsData(data);
        })
        .catch(err => {
            console.log(err.message);
        })  

    }, [url]);

    return wordsData;

}

export default useFetch;