import React, { Component } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import List from "./components/List";
export default class App extends Component {
    constructor() {
        super();
        console.log("constructor", this);
    }
    render() {
        return (
            <div>
                <Title></Title>
                <Form></Form>
                <List></List>
            </div>
        );
    }
}
