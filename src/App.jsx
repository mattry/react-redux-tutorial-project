import Counter from "./features/counter/Counter"
import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import PostsList from "./features/posts/PostsList"
import AddPostForm from "./features/posts/AddPostForm"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<PostsList />} />
      </Routes>
    </>
  )
}

export default App
