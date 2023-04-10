import "./App.css"
import React, { useState } from "react"
import { Route, Routes } from 'react-router-dom'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CatIndex from "./pages/CatIndex"
import CatShow from "./pages/CatShow"
import CatNew from "./pages/CatNew"
import CatEdit from "./pages/CatEdit"
import NotFound from "./pages/NotFound"
import cats from "./mockCats"



const App = () => {
  const [mockCats, setMockCats] = useState(cats)

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cats" element={<CatIndex cats={cats} />} />
        <Route path="/cats/:id" element={<CatShow cats={cats} />} />
        <Route path="/new" element={<CatNew />} />
        <Route path="/edit/:id" element={<CatEdit cats={cats} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App;
