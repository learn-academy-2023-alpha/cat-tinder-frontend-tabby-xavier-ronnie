import "./App.css"
import React, { useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Cats from "./mockCats"



const App = () => {
  const [mockCats, setMockCats] = useState(cats)

  console.log(cats)
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<CatIndex cats={mockCats} />} />
        <Route path="/cats/:id" element={<CatShow cats={mockCats} />} />
        <Route path="/new" element={<CatNew />} />
        <Route path="/edit/:id" element={<CatEdit cats={mockCats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;
