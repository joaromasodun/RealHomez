import { BrowserRouter, Routes, Route }  from 'react-router-dom'

import './App.css'
// import Hero from './components/Hero'
// import Listings from './components/Listings'
// import Footer from './components/Footer'
// import Search from './components/Search'
import PropertiesList from './components/PropertiesLists'
import Signup from './components/Signup'
import AppLayout from './layouts/AppLayout'
import Login from './components/Login'
import Home from './components/Home'




function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="properties" element={<PropertiesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
