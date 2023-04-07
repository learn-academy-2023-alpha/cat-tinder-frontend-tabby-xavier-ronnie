import { render,screen } from "@testing-library/react"
import CatIndex from "./CatIndex"
import cats from "../mockCats"


describe("<CatIndex />", () => {
  it("renders without crashing", () => {})
  it("renders cat cards", () => {
    const div = document.createElement("div")
    render( 
    <CatIndex cats={cats} />, div)
    cats.forEach((cat) => {
      const catName = screen.getByRole('img', {
        name: /profile of a cat named mittens/i
      })
      expect(catName).toBeInTheDocument()
    })
  })
})