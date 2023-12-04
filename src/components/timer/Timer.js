import { useState, useEffect } from "react";

import './timer.css';

const Timer = (props) => {
    let timeLeft = Date.parse(props.time) - Date.parse(new Date());
    const [days, setDays] = useState(getZero(Math.floor(timeLeft / (1000 * 60 * 60 * 24))));
    const [hours, setHours] = useState(getZero(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)));
    const [minutes, setMinutes] = useState(getZero(Math.floor((timeLeft / (1000 * 60)) % 60)));
    const [seconds, setSeconds] = useState(getZero(Math.floor((timeLeft / 1000) % 60)));

    useEffect(() => {
        let timeInterval = setInterval(() => updateClock(), 1000);
        if (timeLeft <= 0) {
            clearInterval(timeInterval);
        }
        return () => {
            clearInterval(timeInterval);
        }
    }, [])

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        };
    };


    function updateClock() {   
        setDays(days => days = getZero(Math.floor((Date.parse(props.time) - Date.parse(new Date())) / (1000 * 60 * 60 * 24))));
        setHours(hours => hours = getZero(Math.floor(((Date.parse(props.time) - Date.parse(new Date())) / (1000 * 60 * 60)) % 24)));
        setMinutes(minutes => minutes = getZero(Math.floor(((Date.parse(props.time) - Date.parse(new Date())) / (1000 * 60)) % 60)));
        setSeconds(seconds => seconds = getZero(Math.floor(((Date.parse(props.time) - Date.parse(new Date())) / 1000) % 60)));
    };

    return (
        <div className="timer">
            <h2>Успей до окончания акции! Осталось всего:</h2>
            <div className="timer__wrapper">
                <div className="timer__element">
                    <p>{days}</p> 
                    <p>дней</p>
                </div>
                <div className="timer__element">
                    <p>{hours}</p> 
                    <p>часов</p>
                </div>
                <div className="timer__element">
                    <p>{minutes}</p> 
                    <p>минут</p>
                </div>
                <div className="timer__element">
                    <p>{seconds}</p> 
                    <p>секунд</p>
                </div>
            </div>
        </div>
    )
}

export default Timer;