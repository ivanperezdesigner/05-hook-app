const { renderHook, act } = require("@testing-library/react-hooks")
const { useForm } = require("../../hooks/useForm")

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Ivan',
        email: 'ivan@gmail.com'
    }

    test('Debe regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm))
        const [ values, handleInputChange, reset ] = result.current
        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('Debe cambiar el valor del formulario', () => {
        const target = {
            name: 'name',
            value: 'Luisa'
        }
        const { result } = renderHook(() => useForm(initialForm))
        const [ , handleInputChange ] = result.current

        act(() => {
            handleInputChange({target})
        })

        const [ values ] = result.current
        expect(values).toEqual({ ...initialForm, name: 'Luisa' })
    })

    test('Debe re-establecer el formulario con reset', () => {
        const target = {
            name: 'name',
            value: 'Luisa'
        }
        const { result } = renderHook(() => useForm(initialForm))
        const [ , handleInputChange, reset ] = result.current

        act(() => {
            handleInputChange({target})
            reset()
        })
        
        const [ values ] = result.current
        expect(values).toEqual(initialForm)
    })
})
