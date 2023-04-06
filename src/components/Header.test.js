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
  // it("renders a logo with a src and alt", () => {
  //   const div = document.createElement("div")
  //   render(
  //     <BrowserRouter>
  //       <Header />
  //     </BrowserRouter>,
  //     div
  //   )
  //   const logo = screen.getByRole("img")
  // expect(logo).toHaveAttribute("src", "https://freesvg.org/img/Colorful-Cat-Heart-Tail-Hearts-8.png")
  // expect(logo).toHaveAttribute("alt", "greetings cat")
  // })
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
