import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './todo'

function list() {
    
    const todos = useSelector((state) => state.todos);

  return (
    <div className="todo-list">
        {todos.map((task)=>{
            return <Todo key = {task.id} task = {task} />
        })}
      
    </div>
  )
}

export default list
