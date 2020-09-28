import React from 'react'

export const TodoListItem = ({index, todo, handleDelete, handleToggle}) => {
    return (
        <li
            className='list-group-item'
            key={todo.id}
        >
            <p
                className={`${todo.done && 'completed'}`}
                onClick={() => handleToggle(todo.id)}
            >
                {index + 1}. {todo.desc}</p>
            <button
                className='btn btn-outline-danger'
                onClick={() => handleDelete(todo.id)}
            >
                Delete
            </button>
        </li>
    )
}
