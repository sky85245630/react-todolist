import React, { Component } from "react";

export default class List extends Component {
    render() {
        console.log("List props", this.props.todos);
        return (
            <div>
                <ol>
                    {this.props.todos.map((e, idx) => {
                        // console.log("e", e);
                        // console.log("idx", idx);
                        return (
                            <li
                                key={e.id}
                                onClick={() => this.props.removeTodo(e.id)}
                            >
                                {e.text}
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}
