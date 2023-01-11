import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom" 

import TodoFooter from "../TodoFooter"

const MockTodoFooter = ({
    numberOfIncompleteTasks
}) => (
    <BrowserRouter>
        <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
    </BrowserRouter>
)

it('Should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5}/>)
    const pElement = screen.getByText(/5 tasks left/i)

    expect(pElement).toBeInTheDocument()
})

it('Should render "task" when the number of incomplete taks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const pElement = screen.getByText(/1 task left/i)

    expect(pElement).toContainHTML('p')
})