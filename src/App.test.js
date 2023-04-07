import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom"
describe("<App />", () => {
  it("renders a greeting", () => {
   
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const greeting = screen.getByText(/welcome to Meow Match!/i)
    expect(greeting).toBeInTheDocument()
  })
  it("renders a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const heading = screen.getByRole('heading', {
      name: /welcome to Meow Match!/i
    })
    expect(heading).toBeInTheDocument()
  })
})