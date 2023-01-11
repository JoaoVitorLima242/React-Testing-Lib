import { screen, render, fireEvent } from "@testing-library/react";

import Todo from '../Todo'
import { BrowserRouter } from "react-router-dom";

const MockedTodo = () => (
    <BrowserRouter>
        <Todo />
    </BrowserRouter>
)

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i)
    const buttonElement = screen.getByRole('button', { name: 'Add' })

    tasks.forEach(task => {
        fireEvent.change(inputElement, {
            target: { value: task }
        })

        fireEvent.click(buttonElement)
    });
}

describe('Todo', () => {
    it('Should render a new todo to list when change the input and press the "Add" button', () => {
        render(<MockedTodo />)

        const newTasks = ['Do the intregration test']

        addTasks(newTasks)

        const newToDoElement = screen.getByText(/Do the intregration test/i)

        expect(newToDoElement).toBeInTheDocument()

    })

    it('Should be able to add more than one todo', () => {
        render(<MockedTodo />)
        const newTasks = ['Do the intregration test', 'More todos', 'Just another one']

        addTasks(newTasks)

        const newToDoElements = screen.getAllByTestId('todoWrapper')

        expect(newToDoElements.length).toBe(3)

    })

    it('Should change the todo counter when add new todos', () => {
        render(<MockedTodo />)
        const newTasks = ['Do the intregration test', 'More todos', 'Just another one']

        addTasks(newTasks)

        const counterElement = screen.getByText('3 tasks left')

        expect(counterElement).toBeInTheDocument()
    })

    it('Tasks should not have completed class when initally rendered', () => {
        render(<MockedTodo />)
        const newTasks = ['Do the intregration test', 'More todos', 'Just another one']

        addTasks(newTasks)

        const newToDoElements = screen.getAllByTestId('todoWrapper')
        
        newToDoElements.forEach(element => {
            expect(element).not.toHaveClass('todo-item-active')
        })
    })

    it('Tasks should have completed class when clicked', () => {
        render(<MockedTodo />)
        const newTasks = ['Do the intregration test']

        addTasks(newTasks)

        const newToDoElement = screen.getByText('Do the intregration test')

        fireEvent.click(newToDoElement)
        
        expect(newToDoElement).toHaveClass('todo-item-active')
    })
})