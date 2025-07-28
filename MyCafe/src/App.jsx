import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import About from './pages/About'
import NotFound from './pages/NotFound'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
