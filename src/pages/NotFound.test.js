import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from "react-router-dom"
describe("<NotFound />", () => {
  it("displays text telling my user the page is not found", () => {
    render( 
        <NotFound />
    )
      const NotFound = screen.getByRole('heading', {
        name: /oops! no cats to be found beyond the plains/i
      })
      expect(NotFound).toBeInTheDocument()
      const image =screen.getByRole('img', {
        name: /greetings cat/i
      })
      expect(image).toBeInTheDocument()
  })
})