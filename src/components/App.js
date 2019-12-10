import React, { Component } from 'react';
import Navbar from './Navigation/Navbar/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    userHandle: 'user',
                    body: 'This is a sample post',
                    createdAt: '2019-03-15T10:59:52.798Z',
                    likeCount: 5,
                    commentCount: 3
                },
                {
                    userHandle: 'user 2',
                    body: 'This is a sample post',
                    createdAt: '2019-04-15T10:59:52.798Z',
                    likeCount: 5,
                    commentCount: 3
                }
            ],
            text: ''
        };
        this.handleInputText = this.handleInputText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputText(e) {
        const text = e.target.value;
        this.setState({ text });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newPost = {
            userHandle: 'user',
            body: this.state.text,
            createdAt: new Date().toISOString(),
            likeCount: 0,
            commentCount: 0
        }
        const posts = [...this.state.posts];
        posts.push(newPost);
        this.setState({
            posts,
            text: ''
        })
        console.log(newPost);
    }

    render() {
        return (
            <div>
                <Navbar />
                Social App
                <form action="" onSubmit={this.handleSubmit}>
                    <label htmlFor="">Post</label>
                    <input onChange={this.handleInputText} value={this.state.text} type="text" />
                    <button>Add</button>
                </form>
                <div className="post">
                    <ul>
                        {this.state.posts.map((post) => {
                            return (
                                <li key={post.createdAt}>
                                    <h2>{post.userHandle}</h2>
                                    <p>{post.body}</p>
                                    <div className="comments">
                                        <ul>
                                            <li>This is my first comment</li>
                                        </ul>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;