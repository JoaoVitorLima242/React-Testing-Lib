import { render, screen } from '@testing-library/react'

import Header from '../Header'

// GET BY
it('Should render the same text passed into title prop', () => {
    render(<Header title='My Header'/>)

    const headingElement = screen.getByText(/my header/i)

    expect(headingElement).toBeInTheDocument()
})

it('Should render a heading in our component with a text passed by title prop', () => {
    render(<Header title='My Header'/>)

    const headingElement = screen.getByRole('heading', {
        name: 'My Header'
    })

    expect(headingElement).toBeInTheDocument()
})

// FIND BY
it('Should render the same text passed into title prop using find', async () => {
    render(<Header title='My Header'/>)

    const headingElement = await screen.findByText(/my header/i)

    expect(headingElement).toBeInTheDocument()
})

// QUERY BY
it('Should render the same text passed into title prop using query', async () => {
    render(<Header title='My Header'/>)

    const headingElement = screen.queryByText(/dogs/i)

    expect(headingElement).not.toBeInTheDocument()
})

it('Should render two titles', async () => {
    render(<Header title='My Header'/>)

    const headingElements = screen.getAllByRole('heading')

    expect(headingElements.length).toBe(2)
})