import React from 'react';
import './styles.css';

export default function Footer() {
    return (
        <>
            <div id="footer">
                <a href="http://www.dotgears.com/">original game/concept/art by dong nguyen</a>
                <a href="http://nebezb.com/">recreated in reactJS by jeanluca fernandes</a>
                <a href="http://github.com/Jean1Dev/floppybird/">view github project</a>
            </div>

            <div className="boundingbox" id="playerbox"></div>
            <div className="boundingbox" id="pipebox"></div>
        </>
    );
}
