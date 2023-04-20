import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'; 
import Word from './Word';
import useFetch from './hooks/useFetch';

const Dday = () => {
    const [words, setWords] = useState([])
    
    let {id} = useParams();

    // const words = useFetch(`http://localhost:3001/words?day=${id}`)
    
    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${id}`)
        .then(res => {
            if(!res.ok) {
                throw new Error(`네트워크 연결 안됨 ${res.status}`);
            }
            return res.json()
        })
        .then(data => {
            setWords(data);
        })
        .catch(err => {
            console.log(err.message);
        })  

    }, [id]);

        
    return <>
            <h2>Day {id}</h2>
            {words.length === 0 && <span>Loding...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
}

export default Dday;