import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Menu from './pages/Menu'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ComingSoon from './pages/ComingSoon'
import OnHospitality from './pages/OnHospitality'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='menu' element={<Menu/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='hospitality' element={<OnHospitality/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
        <Route path='cs' element={<ComingSoon/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
