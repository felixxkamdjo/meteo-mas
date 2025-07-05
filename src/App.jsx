import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DayForecast from './components/DayForecast'

const App = () => {

  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/day' element={<DayForecast />} />
        </Routes>
    </>
  )
}

export default App