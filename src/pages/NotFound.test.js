import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from "react-router-dom"
describe("<NotFound />", () => {
  it("displays text telling my user the page is not found", () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    )
      screen.logTestingPlaygroundURL()
      const notFound = screen.getByRole('not_found', {
        name: /oops! no cats to be found beyond the plains\./i
      })
      expect(notFound).toBeInTheDocument()
      const image = screen.getByRole('img', {
        name: /"cat-friend"\./i
      })
      expect(image).toBeInTheDocument()
  })
})