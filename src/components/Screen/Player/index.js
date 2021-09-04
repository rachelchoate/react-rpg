/** @module components/Screen/Player */
import React from 'react';
import { observer } from 'mobx-react';
import State from '../../../state';

import './style.css';

/**
* @description player character as rendered on map
*/
const Player = () => (
    <div
        id="player"
        style={{
            top: `${State.player.x}px`,
            left: `${State.player.y}px`,
        }}
    />
);

export default observer(Player);
