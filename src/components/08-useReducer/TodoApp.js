import React, { useReducer } from 'react'
import './styles.css'
import { todoReducer } from './todoReducer'

const initialState = [{
    id: new Date().getTime(),
    desc: 'Learn React',
    done: false
}]

export const TodoApp = () => {
    const [ todos, dispatch ] = useReducer(todoReducer, initialState)
    console.log(todos)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const newTodo = {
            id: new Date().getTime(),
            desc: 'New task',
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch (action)
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
                                <button className='btn btn-outline-danger'>
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
