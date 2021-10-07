import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
export default class App extends Component {
    constructor() {
        super();
        console.log("constructor", this);
        let app_list = ["app1", "app2", "app3"];
        this.state = {
            todos: app_list,
        };
    }

    createTodo(e) {
        this.setState({
            todos: [...this.state.todos, e],
        });
    }

    removeTodo(e) {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return e !== todo;
            }),
        });
    }

    render() {
        return (
            <div>
                <Title todos={this.state.todos} />
                <Form
                    createTodo={(e) => {
                        this.createTodo(e);
                    }}
                />
                <List
                    todos={this.state.todos}
                    removeTodo={(e) => this.removeTodo(e)}
                />
            </div>
        );
    }
}
