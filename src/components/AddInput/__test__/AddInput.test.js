import { render, screen, fireEvent } from "@testing-library/react";

import AddInput from "../AddInput";

const mockedSetTodos = jest.fn()

describe('AddInput', () => {
    it('Should render a input element', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument()
    })

    it('Should be able to type into the input', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)

        fireEvent.change(inputElement, {
            target: {
                value: 'New to-do to list!'
            }
        })

        expect(inputElement.value).toBe('New to-do to list!')
    })

    it('Should have a empty input when the add button is clicked', () => {
        render(
            <AddInput 
                todos={[]}
                setTodos={mockedSetTodos}
            />
        )
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
        const buttonElement = screen.getByRole('button', {
            name: 'Add'
        })

        fireEvent.change(inputElement, {
            target: 'Text to be empty'
        })
        
        fireEvent.click(buttonElement)

        expect(inputElement.value).toBe('')
    })
})