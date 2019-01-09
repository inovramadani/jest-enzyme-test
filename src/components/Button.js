import React, { Component } from 'react';
import propTypes from 'prop-types';
import './Button.less'

const Button = (props) => (
	<button className="btn" onClick={props.onClick}>{props.text}</button>
);

Button.propTypes = {
	text: propTypes.string.isRequired,
};

export default Button;