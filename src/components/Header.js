import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    
    function addWords () {
        console.log('단어 추가');
    }

    function addDays () {
        console.log('날짜 추가');
    }

    return(
        <div className="header">
        <h1>
          {/* <Link to="/">토익 영단어(고급)</Link> */}
          <Link to='/'>토익 영단어(고급)</Link>
        </h1>
        <div className="menu">
          {/* <Link to="/create_word" className="link"> */}
          <button onClick={addWords}>
            단어 추가
          </button>
          {/* <Link to="/create_day" className="link"> */}
          <button onClick={addDays}>
            Day 추가
          </button>
        </div>
      </div>
    )
}


export default Header;