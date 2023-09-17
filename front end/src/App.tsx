import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CreateLogin from './pages/Login/CreateLogin'

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/create_user" element={<CreateLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
