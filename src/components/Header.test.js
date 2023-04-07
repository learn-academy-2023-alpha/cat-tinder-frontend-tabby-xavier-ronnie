import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import userEvent from "@testing-library/user-event"
import Header from "./Header"

describe("<Header />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div")
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
      div
    )
  })
     it("has clickable links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
    userEvent.click(screen.getByText("Meow Match"))
  expect(screen.getByText("Meow Match")).toBeInTheDocument()
  userEvent.click(screen.getByText("Cats"))
  expect(screen.getByText("Cats")).toBeInTheDocument()
  userEvent.click(screen.getByText("New Cat"))
  expect(screen.getByText("New Cat")).toBeInTheDocument()
  })
})
