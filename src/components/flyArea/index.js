import React from 'react';
import './styles.css';
import replayImg from '../../assets/replay.png'

export default function FlyArea() {
    return (
        <div id="flyarea">
            <div id="ceiling" className="animated"></div>

            <div id="player" className="bird animated"></div>

            <div id="bigscore"></div>

            <div id="splash"></div>

            <div id="scoreboard">
                <div id="medal"></div>
                <div id="currentscore"></div>
                <div id="highscore"></div>
                <div id="replay">
                    <img onClick={() => { alert('click') }} src={replayImg} alt="replay"></img>
                </div>
            </div>
        </div>
    );
}
