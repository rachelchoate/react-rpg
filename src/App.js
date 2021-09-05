/** @module App */
import React, { useEffect } from 'react';
import Dialogue from './components/Dialogue';
import Screen from './components/Screen';
import State from './state';

const App = () => {
    useEffect(() => {
        State.actions.loadMap();
    }, []);
    return (
        <div id="app">
            <div id="game-container">
                <Screen
                    resolution={{ height: State.map.height, width: State.map.width }}
                />
                <Dialogue />
            </div>
        </div>
    );
};

export default App;
