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
            height: `${resolution.height + 5}px`,
            width: `${resolution.width + 10}px`,
        }}
        onKeyDown={State.actions.handleKeyPress}
    >
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
