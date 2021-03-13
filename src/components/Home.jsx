import React, { Component } from 'react'
import Navbar from './Navbar';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0,
        }
    }

    increaseHandler = (event) => {
        event.preventDefault();
        this.setState({
            count : this.state.count + 1
        })
    }

    decreaseHandler = (event) => {
        event.preventDefault();
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {
        const {count} = this.state;
        console.log(this.state)
        return (
            <div>
                <Navbar></Navbar>
                <h1>{this.props.message}</h1>
                <button onClick={this.increaseHandler}>+</button>
                <h1 style={{color:"red"}}>{Number(count)}</h1>
                <button onClick={this.decreaseHandler}>-</button>
            </div>
        )
    }
}