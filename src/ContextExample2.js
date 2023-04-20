import React from 'react';

let MyContext = React.createContext("there");

export class Example1 extends React.Component {
    static contextType = MyContext;
    render() {
        return <div>Hello {this.context}</div>;
    }
}

export class Example2 extends React.Component {
    static contextType = MyContext;
    render() {
        return <div>Hi {this.context}</div>;
    }
}