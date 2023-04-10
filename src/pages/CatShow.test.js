import { render, screen } from "@testing-library/react"
import CatShow from "./CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import cats from '../mockCats'

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/catshow/1"]}>
      <Routes>
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
      </Routes>
    </MemoryRouter>
  )
}

describe("<CatShow />", () => {
  it("renders cat enjoys attribute", () => {
    renderShow()
    const enjoys = screen.getByText(`Enjoys: ${cats[0].enjoys}`)
    expect(enjoys).toBeInTheDocument()
  })
})