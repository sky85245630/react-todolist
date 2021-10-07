import React, { Component } from "react";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            text: "asd",
        };
        // this.createTodo = this.createTodo.bind(this);
    }

    createTodo() {
        this.props.createTodo(this.state.text);
        this.setState({
            text: "",
        });
    }

    handleChange(e) {
        this.setState({
            text: e.target.value,
        });
    }

    handleKeyDown(e) {
        e.keyCode === 13 && this.createTodo();
    }

    render() {
        return (
            <div>
                <input
                    onChange={(e) => this.handleChange(e)}
                    onKeyDown={(e) => {
                        this.handleKeyDown(e);
                    }}
                    value={this.state.text}
                />
                {/* <button onClick={() => this.props.createTodo(this.state.text)}>
                    new
                </button> */}
                <button onClick={() => this.createTodo()}>new</button>
            </div>
        );
    }
}
