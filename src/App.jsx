
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Properties from './pages/Properties'
import Explore from './components/Explore'
import Footer from './components/Footer'
import FooterBottom from './components/FooterBottom'
 function App() {
  return (
    <div className="">
       <TopBar/>
       <Navbar/>
     <Routes>
     <Route path='/' element={<HomePage/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/aboutUs' element={<AboutUs/>}></Route>
      <Route path='/properties' element={<Properties/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     </Routes>
     <Explore/>
     <Footer/>
     <FooterBottom/>
    </div>
    

    
  )
}

export default App
