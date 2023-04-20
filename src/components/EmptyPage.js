import React from 'react';
import { Link } from "react-router-dom"

const EmptyPage = () => {

    return (<>
            <h2>404 에러</h2>
            <Link to='/'>처음으로 돌아가기</Link>
        </>
    )
}

export default EmptyPage