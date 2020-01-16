import React from 'react';
import Todo from "./components/TodoComponents/Todo";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

const todoData = [

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }

  handleClearCompletedEvent = ()=>{
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    }
    )
  }

  handleCompletedEvent = (id)=>{
    this.setState({
      todos: this.state.todos.map(todo=> {
      if (id ===todo.id){
      return {...todo, completed: !todo.completed};
    }else {
      return todo;
    }
    })
  })
}


  handleInputChange = event =>{
    console.log(event.target.value)
    this.setState({task: event.target.value});
  }

  addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task, 
        id: Date.now(),
        completed: false,
      }]
    })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <p>{this.state.task}</p>
        <TodoForm addTodo = {this.addTodo} clear = {this.handleClearCompletedEvent}/>
        <TodoList todos = {this.state.todos} completed = {this.handleCompletedEvent}/>
      </div>
    );
  }
}

export default App;
