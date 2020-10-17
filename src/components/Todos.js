import React, { useState } from 'react'
import Todo from './Todo'

const Todos = props => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("Title...");
    
    const addTodo = () => {
        if(input && input !== 'Title...'){
            setTodos([...todos, {
                id : todos.length,
                task : input,
                checked : false,
            },
        ]);
        }
    };

    return (
        <div>
            <div id="myDIV" className="header">
                <h2 style={{margin:5}}>My To Do List</h2>
                <input 
                onChange={(e) => setInput(e.target.value)} 
                type="text" 
                id="myInput" 
                placeholder={input}
                />
                <span onClick={() => addTodo()} className="addBtn">
                    Add
                </span>
        </div>

<ul id="myUL">
        {todos.map((elem) => {
            return <Todo key={elem.id} todo={elem} remove={setTodos} />
        })}
</ul>

        </div>
    )
}


export default Todos