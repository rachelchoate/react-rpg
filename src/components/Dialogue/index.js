/** @module components/Dialogue */
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

/**
* @description returns stylized dialogue box
* @props
*/
const Dialogue = ({ title, content, centered }) => (
    <div
        id="dialogue"
        className={`nes-container ${title ? 'with-title' : ''} ${centered ? 'is-centered' : ''}`}>
        {title && <p className="title">{title}</p>}
        <p>{content}</p>
        <button className="nes-btn" id="continue-btn">[Enter]</button>
    </div>
);

Dialogue.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    centered: PropTypes.bool,
};

Dialogue.defaultProps = {
    title: null,
    content: '...',
    centered: false,
};

export default Dialogue;
