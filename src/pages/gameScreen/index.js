import React, { useEffect } from 'react';
import './styles.css';
import Footer from '../../components/footer'
import FlyArea from '../../components/flyArea';

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
            resolve();
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

export default function GameScreen() {
    useEffect(() => {
        const scripts = [
            'js/jquery.min.js',
            'js/jquery.transit.min.js',
            'js/buzz.min.js',
            'js/main.js',
        ];

        let active = true;
        (async () => {
            for (const src of scripts) {
                if (!active) break;
                await loadScript(src);
            }
        })();

        return () => { active = false; };
    }, []);

    useEffect(() => {
        const GAME_W = 320;
        const GAME_H = 568;

        function scaleGame() {
            const el = document.getElementById('gamecontainer');
            if (!el) return;
            const scale = Math.min(window.innerWidth / GAME_W, window.innerHeight / GAME_H);
            el.style.transform = `scale(${scale})`;
        }

        scaleGame();
        window.addEventListener('resize', scaleGame);
        window.addEventListener('orientationchange', scaleGame);
        return () => {
            window.removeEventListener('resize', scaleGame);
            window.removeEventListener('orientationchange', scaleGame);
        };
    }, []);

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
        </>
    );
}
