import React from 'react';
const { shallow } = require("enzyme")
const { TodoListItem } = require("../../../components/08-useReducer/TodoListItem")
const { demoTodos } = require("../../fixtures/demoTodos")

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoListItem 
            todo= {demoTodos[0]}
            index= {0}
            handleDelete= { handleDelete }
            handleToggle= { handleToggle }
        />
    )

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('Debe llamar la función handleDelete', () => {
        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)
    })

    test('Debe llamar la función handleToggle', () => {
        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
    })
    
    test('Debe mostrar el texto correctamente', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(`1. ${ demoTodos[0].desc }`)
    })

    test('Debe tener la clase completed si el todo.done está en true', () => {

        const todo = demoTodos[0]
        todo.done = true

        const wrapper = shallow(
            <TodoListItem 
                todo= {todo}
            />
        )

        expect(wrapper.find('p').hasClass('completed')).toBe(true)
    })
})
