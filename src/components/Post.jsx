import axios from 'axios';
import React, { Component } from 'react'
import Navbar from './Navbar';
export default class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }
    }

    componentDidMount() {
        this.getPost();
    }

    getPost = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    post: response.data
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { body, title, id } = this.state.post
        return (
            <div>
                <Navbar></Navbar>
                <br/>
                <div className="container">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{title} - ({id})</h5>
                            <p className="card-text">{body}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
