import React from 'react';
import './TimeLine.css';

function TimeLine() {
    return (
        <div className='timeline__container'>
            <div className='timeline__button__container'>
                <div className='timeline__button'>LIVE</div>
                <div className='timeline__button'>1 D</div>
                <div className='timeline__button active'>1 W</div>
                <div className='timeline__button'>3 M</div>
                <div className='timeline__button'>1 Y</div>
                <div className='timeline__button'>ALL</div>
            </div>
        </div>
    )
}

export default TimeLine
