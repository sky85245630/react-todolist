import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
export default class App extends Component {
    constructor() {
        super();
        console.log("constructor", this);
        let app_list = [
            { id: 1, text: "app1" },
            { id: 2, text: "app2" },
            { id: 3, text: "app3" },
        ];
        this.state = {
            todos: app_list,
            startId: 3,
        };
    }

    createTodo(e) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: this.state.startId,
                    text: e,
                },
            ],
            startId: this.state.startId + 1,
            //++會報警告
            // startId: this.state.startId++,
        });
    }

    removeTodo(e) {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.id !== e;
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
