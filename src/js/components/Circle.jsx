import React, {useState, useEffect,useRef} from 'react';

export const Circle = (props) =>{
    const [color, setColor] = useState('red');
    const [position, setPosition] = useState(0);
    const posRef = useRef(position);
    posRef.current = position;
    useEffect(()=>{setInterval(()=>{setColor('blue'); setPosition(posRef.current+props.step)}, 1000);}, []);
    setInterval(()=>{setColor('red')}, 1000);
    return <div className={'circle-ball'} style={{backgroundColor:color, transform: `translate(${position}px, ${position}px)`}}/>
};