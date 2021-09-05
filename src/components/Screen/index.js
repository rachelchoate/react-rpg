/** @module components/Screen */
import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import State from '../../state';

import './style.css';

/**
* @description return game screen
* @props
*/
const Screen = ({ resolution }) => (
    <div
        tabIndex="1"
        id="screen"
        style={{
            height: `${resolution.height + 10}px`,
            width: `${resolution.width + 10}px`,
            background: State.map.background,
        }}
        onKeyDown={State.actions.handleKeyPress}
    >
        {State.map.tiles.map((tile) => (
            <div
                class="tile"
                style={{
                    background: tile.background,
                    top: `${tile.top}px`,
                    left: `${tile.left}px`,
                    height: `${tile.height}px`,
                    width: `${tile.width}px`,
                }}
            />
        ))}
        <Player />
    </div>
);

Screen.propTypes = {
    resolution: PropTypes.shape({
        height: PropTypes.number,
        width: PropTypes.number,
    }),
};

Screen.defaultProps = {
    resolution: {
        height: 500,
        width: 1000,
    },
};

export default Screen;
