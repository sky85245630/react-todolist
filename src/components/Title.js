import React, { Component } from "react";

export default class Title extends Component {
    render() {
        return <h2>Title({this.props.todos.length})</h2>;
    }
}
