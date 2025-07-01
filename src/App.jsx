import { Route, Routes } from 'react-router-dom'
import './App.css'
import AboutApp from './pages/AboutApp'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Home from './pages/Home'
import WeatherCard from './components/WeatherCard'

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutApp />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/card' element={<WeatherCard />} />
      </Routes>
    </>
  )
}

export default App