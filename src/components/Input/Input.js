import React, { Component } from 'react';
import './Input.css';

class Input extends Component {

    render() {
        return (
            <input
                className={ `input ${this.props.state ? `input_state_${this.props.state}` : ''}` }
                name={ this.props.name }
                value={ this.props.value }
                type={ this.props.type || 'text' }
                placeholder={ this.props.placeholder }
            />
        );
    }
}

export default Input;
