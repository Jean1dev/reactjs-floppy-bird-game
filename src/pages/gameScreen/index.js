import React from 'react';
import './styles.css';
import ScriptTag from 'react-script-tag'
import Footer from '../../components/footer'
import FlyArea from '../../components/flyArea';

export default function GameScreen() {
    return (
        <>
            <div id="gamescreen">
                <div id="sky" className="animated">
                    <FlyArea/>
                </div>

                <div id="land" className="animated">
                    <div id="debug"></div>
                </div>

            </div>

            <Footer/>

            <ScriptTag type="text/javascript" src="js/jquery.min.js" />
            <ScriptTag type="text/javascript" src="js/jquery.transit.min.js" />
            <ScriptTag type="text/javascript" src="js/buzz.min.js" />
            <ScriptTag type="text/javascript" src="js/main.js" />
        </>
    );
}
