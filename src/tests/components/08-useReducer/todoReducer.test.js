const { todoReducer } = require("../../../components/08-useReducer/todoReducer")
const { demoTodos } = require("../../fixtures/demoTodos")

describe('Pruebas en todoReducer', () => {
    test('Debe retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)
    })
    
    test('Debe agregar un todo', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender JavaScript',
            donde: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }
        
        const state = todoReducer(demoTodos, action)
        expect(state.length).toBe(3)
        expect(state).toEqual([...demoTodos, newTodo])
    })
    
    test('Debe eliminar un todo', () => {

        const action = {
            type: 'delete',
            payload: 1
        }
        
        const state = todoReducer(demoTodos, action)
        expect(state.length).toBe(1)
        expect(state).toEqual([demoTodos[1]])
    })
    
    test('Debe hacer el toggle del todo', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }
        
        const state = todoReducer(demoTodos, action)
        expect(state[0].done).toBe(true)
        expect(state[1]).toEqual(demoTodos[1])
    })    
})
