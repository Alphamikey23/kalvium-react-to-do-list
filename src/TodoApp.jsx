import React, { Component } from "react";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      currentTask: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  addTask = () => {
    if (this.state.currentTask.trim()) {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, prevState.currentTask],
        currentTask: "",
      }));
    }
  };

  deleteTask = (index) => {
    this.setState((prevState) => {
      const tasks = [...prevState.tasks];
      tasks.splice(index, 1);
      return { tasks };
    });
  };

  updateTask = (index, newTask) => {
    this.setState((prevState) => {
      const tasks = [...prevState.tasks];
      tasks[index] = newTask;
      return { tasks };
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={this.state.currentTask}
            onChange={this.handleInputChange}
            placeholder="Enter task"
          />
          <button onClick={this.addTask}>Add Task</button>
        </div>
        <div className="tasks-container">
          {this.state.tasks.map((task, index) => (
            <div key={index} className="task-item">
              <input
                type="text"
                value={task}
                onChange={(event) =>
                  this.updateTask(index, event.target.value)
                }
              />
              <button onClick={() => this.deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
