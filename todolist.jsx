import React, { Component } from 'react';
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={todos: [],inputvalue: ""};
        
    }
    addTodoList=()=>{
        if(this.state.inputvalue.trim()=="")return;
        const newentry={
            id:Date.now(),
            text:this.state.inputvalue,
            completed:false,

        };
        this.setState((prevState)=>({
            todos:[newentry,...prevState.todos],
            inputvalue:"",
        }));
    };
    onInputChange=(e)=>{
        this.setState({inputvalue:e.target.value});
    }
    toggleCompleted=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.map(todo=>
                todo.id===id ? {...todo,completed:!todo.completed}:todo
            )
        }));
    }
    deleteTodo=(id)=>{
        this.setState((prevState)=>({
            todos:prevState.todos.filter(todo=>todo.id!==id)
        }));
    }
    render(){
        const{todos,inputvalue}=this.state;
        return (
            <>
                <input type="text" value={inputvalue} onChange={this.onInputChange} />
                <br />
                <button onClick={this.addTodoList}>Add</button>
                <br />
                <ul>
                    {todos.map((x) => (
                        <li key={x.id}>
                            <input type="checkbox" checked={x.completed} onChange={() => this.toggleCompleted(x.id)} style={{ backgroundColor: x.completed ? 'green' : 'red' }} />
                            {x.text}
                            <span style={{ color: x.completed ? 'green' : 'red' }}>
                                {x.completed ? 'completed' : 'not completed'}
                            </span>
                            <button onClick={() => this.deleteTodo(x.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
export default TodoList;