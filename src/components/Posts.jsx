import React, { Component } from 'react'
import axios from 'axios';
import Navbar from './Navbar';
import {Link} from 'react-router-dom'

export default class Posts extends Component {

    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.getPosts();
    }

    getPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        const { posts } = this.state;
        const renderPosts = posts.map((element, index) => {
            const detailsUrl = `/post/${element.id}`
            return (
            <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{element.title}</td>
                <td>{element.body}</td>
                <td><Link className="btn btn-dark" to={detailsUrl}>View</Link></td>
            </tr>
            )
        });

        return (
            <div>
                <Navbar></Navbar>
                <br/>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {renderPosts}
                    </tbody>
                </table>
                </div>

            </div>
        )
    }
}
