import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({handleAddTodo}) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit= (e) =>{
        e.preventDefault()
        if (description.trim().length <= 1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
            }
    
        handleAddTodo (newTodo)
        reset()
    }

    return (
        <>
            <h4>Add Tasks</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Next task...'
                    autoComplete='off'
                    name='description'
                    className='form-control'
                    value={description}
                    onChange={handleInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-outline-success mt-1 btn-block'
                >
                    Add task
                        </button>
            </form>
        </>
    )
}
