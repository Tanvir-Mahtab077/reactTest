import React, { Component } from 'react'
import Navbar from './Navbar';

export default class About extends Component {
    constructor(props) {
        super(props);
    }

    aboutListener = () => {
        prompt('Hello world');
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <h1>{this.props.aboutMessage}</h1>
                <button className="btn btn-dark" onClick={this.aboutListener}>click here</button>
            </div>
        )
    }
}
