import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            text: "asd",
        };
        this.createTodo = this.createTodo.bind(this);
    }

    createTodo() {
        this.props.createTodo(this.state.text);
    }

    handleChange(e) {
        this.setState({
            text: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e)} />
                {/* <button onClick={() => this.props.createTodo(this.state.text)}>
                    new
                </button> */}
                <button onClick={() => this.createTodo()}>new</button>
            </div>
        );
    }
}
