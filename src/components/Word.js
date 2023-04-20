import React, { useState } from 'react';

const Word = ({word}) => {

    const [langageChange, setLangageChange] = useState(word.kor);
    const [isDone, setIsDone] = useState(word.isDone);

    const showChange = () => {
        setLangageChange(!langageChange); 
    }

    function toggleDone() {
        setIsDone(!isDone);
    }

    return(
        <tr className={isDone ? "off": ""}>
            <td>
                <input type='checkbox'
                    onChange={toggleDone}
                />
            </td>
            <td>{word.eng}</td>
            <td>{word.kor && langageChange }</td>
            <td>
                <button onClick={showChange}>뜻 {langageChange ? "숨기기" : "보기"}</button>
                <button className='btn_del'>삭제</button>
            </td>
        </tr>
    )
}

export default Word;