import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Newsroom from './pages/Newsroom'
import Login from './pages/Login'
import Register from './pages/Register/CreateLogin'
import RequireAuth from './contexts/Auth/RequireAuth'

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/newsroom" element={ 
              <RequireAuth>
                <Newsroom />
              </RequireAuth>
            } 
          /> 
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
