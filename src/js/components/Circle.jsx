import React, {useState, useEffect,useRef} from 'react';

export const Circle = (props) =>{
    const [color, setColor] = useState('red');
    const [position, setPosition] = useState(0);
    const posRefX = useRef(0);
    const posRefY = useRef(0);


    setInterval(function () {
        posRefX.current = Math.random() * props.width;
        posRefY.current = Math.random() * props.height;
        document.querySelector('.circle-ball').style.transform = `translate(${posRefX.current}px, ${posRefY.current}px)`;
        document.querySelector('.circle-ball').style.transition = posRefX.current/props.width * 5 + 's';
    },3000);

    return <div className={'circle-ball'} style={{backgroundColor:color, transform: `translate(${posRefX.current}px, ${posRefY.current}px)`}}/>
};