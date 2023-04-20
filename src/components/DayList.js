import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './hooks/useFetch';

const DayList = () => {

    const [days, setDays] = useState([]);

    // const days = useFetch("http://localhost:3001/days")

    useEffect(() => {
        fetch("http://localhost:3001/days")
          .then(res => {
            if (!res.ok) {
              throw new Error(`네트워크 연결 안됨 ${res.status}`);
            }
            return res.json();
          })
          .then(data => {
            setDays(data);
          })
          .catch(err => {
            console.error(err.message);
          });
      }, []);

      if(days.length === 0 ) {
        return <span>Loding...</span>
      }

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}

export default DayList