import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Footer from "./Footer"

describe("<Footer />", () => {
    it("has a copyright", () => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      )
        // screen.logTestingPlaygroundURL()
        const footer = screen.getByText(/© 2023 Meow Match  | Xavier and Ronnie/i)
        expect(footer).toBeInTheDocument()
    })
  })