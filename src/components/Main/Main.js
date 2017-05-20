import React, { Component } from 'react';
import logo from './logo.svg';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React with gemini</h2>
                    <h3>{this.props.name} from {this.props.company}</h3>
                </div>
            </div>
        );
    }
}

export default Main;
