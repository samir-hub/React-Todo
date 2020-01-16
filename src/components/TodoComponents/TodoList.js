// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props){
        super(props);
        console.log('Todo List', props)
    }
    render(){
        console.log('Todo List', this.props)
        return (
            <div>{this.props.todos.map(todo => <Todo key = {todo.id} todo = {todo} completed = {this.props.completed}></Todo>)}</div>
        )
    }

}

export default TodoList;