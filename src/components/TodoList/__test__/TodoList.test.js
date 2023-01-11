import { render, screen } from "@testing-library/react"

import TodoList from "../TodoList"
import { BrowserRouter } from "react-router-dom"

const mockedSetTodos = jest.fn()
const MockTodoList = ({
    todos
}) => (
    <BrowserRouter>
        <TodoList 
            todos={todos}
            setTodos={mockedSetTodos}
        />
    </BrowserRouter>
)

describe('TodoList', () => {
    it('Should initialize with 0 todos on the list', () => {
        render(
            <MockTodoList
                todos={[]}
            />
        )
        
        const toDoElements = screen.queryAllByTestId('todoWrapper')

        expect(toDoElements.length).toBe(0)

    })
    
    it('Should render more than one todo', () => {
        render(
            <MockTodoList
                todos={['one', 'two', 'three']}
            />
        )
        const toDoElements = screen.getAllByTestId('todoWrapper')


        expect(toDoElements.length).toBe(3)
    })
})