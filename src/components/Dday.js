import dummy from './db/data.json';
import { useParams } from 'react-router-dom'; 
import Word from './Word';

const Dday = () => {

    let {id} = useParams();
    const eachDay = (dummy.words.filter( word => (word.day == id)))
        
    return <>
            <h2>Day {id}</h2>
            <table>
                <tbody>
                    {eachDay.map(word => (
                        <Word word={word} key={word.id}/>
                    ))}
                </tbody>
            </table>
        </>
}

export default Dday;