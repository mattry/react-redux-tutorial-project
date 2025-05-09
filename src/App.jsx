import Counter from "./features/counter/Counter"
import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  )
}

export default App
