import React, { useEffect, useReducer } from 'react'
import { useForm } from '../../hooks/useForm'
import './styles.css'
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, [], init)
    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = ( todoId ) => {
        // Crear la action
        const action = {
            type: 'delete',
            payload: todoId
        }
        // Crear el dispatch
        dispatch (action)

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1){
            return
        }
        
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch (action)
        reset()
    }

    return (
        <div>
            <h1>Todo App <small>({ todos.length })</small></h1>
            <hr/>
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                    {
                        todos.map( (todo, i) => (
                            <li
                                className='list-group-item'
                                key={todo.id}
                            >
                                <p className='text-center'>{i + 1}. {todo.desc}</p>
                                <button 
                                    className='btn btn-outline-danger'
                                    onClick={ () => handleDelete( todo.id ) }
                                >
                                    Delete
                                </button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                <div className='col-5'>
                    <h4>Add Tasks</h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <input
                            type='text'
                            placeholder='Next task...'
                            autoComplete='off'
                            name='description'
                            className='form-control'
                            value={ description }
                            onChange={ handleInputChange }
                        />
                        <button
                            type='submit'
                            className='btn btn-outline-success mt-1 btn-block'
                        >
                            Add task
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
