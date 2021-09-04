/** @module components/Dialogue */
import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import State from '../../state';

import './style.css';

/**
* @description returns stylized dialogue box
* @props
*/
const Dialogue = ({ centered }) => State.dialogue.show ? (
    <div
        id="dialogue"
        className={`nes-container ${State.dialogue.title ? 'with-title' : ''} ${centered ? 'is-centered' : ''}`}>
        {State.dialogue.title && <p className="title">{State.dialogue.title}</p>}
        <p>{State.dialogue.content}</p>
        <button className="nes-btn" id="continue-btn">[Enter]</button>
    </div>
) : '';

Dialogue.propTypes = {
    centered: PropTypes.bool,
};

Dialogue.defaultProps = {
    centered: false,
};

export default observer(Dialogue);
