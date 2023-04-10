import { render,screen } from "@testing-library/react"
import CatIndex from "./CatIndex"
import cats from "../mockCats"
import { BrowserRouter } from "react-router-dom";

describe("<CatIndex />", () => {
  it("renders without crashing", () => {})
  it("renders cat cards", () => {
    render( 
      <BrowserRouter>
    <CatIndex cats={cats} />
    </BrowserRouter>)
    cats.forEach((cat) => {
      screen.logTestingPlaygroundURL()
      const catName = screen.getByRole('img', {
        name: /profile of a cat named mittens/i
      })
      expect(catName).toBeInTheDocument()
    })
  })
})