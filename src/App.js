import React, { Component, component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: true,
      inputValue: "",
      listofTodos: [],
    };
  }

  handleClick = () => {
    this.state.isClicked
      ? this.setState({ isClicked: false })
      : this.setState({ isClicked: true });

    const filteredTodo = this.state.listofTodos.filter(
      (todo) => todo.id !== id
    );

    this.setState({
      todo: filteredTodo,
    });
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      listofTodos: [
        ...this.state.listofTodos,
        { id: nanoid(), listofTodos: this.state.inputValue },
      ],
    });
    this.setState.inputValue({ inputValue: "" });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> To Do List</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.inputValue}
              onChange={this.handleChange}
            ></input>
            <button type="submit">submit here</button>
          </form>
          <ol>
            {this.state.listofTodos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ol>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* To Do list */}
          </a>
        </header>
      </div>
    );
  }
}

export default App;
