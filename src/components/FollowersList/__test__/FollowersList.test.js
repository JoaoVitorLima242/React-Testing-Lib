import { render, screen, waitFor } from "@testing-library/react"

import FollowersList from "../FollowersList"
import { BrowserRouter } from "react-router-dom"

const MockFollowersList = () => (
    <BrowserRouter>
        <FollowersList />
    </BrowserRouter>
)

describe('FollowersList', () => {
    it('Should render 5 followers initially', async () => {
        render(<MockFollowersList />)
        const followerElements = await screen.findAllByTestId('followerWrapper')

        expect(followerElements.length).toBe(5)
    })
})