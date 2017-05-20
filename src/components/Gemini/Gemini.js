import React, { Component } from 'react';
import './Gemini.css';

const queryString = require('query-string');

class Gemini extends Component {

    componentWillMount() {
        const query = queryString.parse(this.props.location.search);

        fetch(`/gemini-stub?path=${query.path}`)
            .then(response => response.json())
            .then(data => this.setState({ data: data.blocks }))
    }

    requireBlock(path) {
        let block;

        try {
            block = require('../../' + path);
        } catch(e) {
            block = require('../../' + path + '/index');
        }

        return block.default
    }

    processBlock(dataItem, index) {
        return (
            <div style={{margin: '10px'}} key={ `${dataItem.block}-${index}` }>
                {
                    React.createElement(
                        this.requireBlock(dataItem.block), dataItem.props
                    )
                }
            </div>
        )
    }

    render() {
        return (
            <div className="gemini-suite-wrapper">
                {
                    this.state && this.state.data && this.state.data.map((item, index) =>
                        this.processBlock(item, index)
                    )
                }
            </div>
        );
    }
}

export default Gemini;
