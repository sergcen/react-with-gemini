import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    render() {
        return (
            <button className={
                `button  ${this.props.type && `button_type_${this.props.type}`}`}>
                { this.props.text }
            </button>
        );
    }
}

export default Button;
