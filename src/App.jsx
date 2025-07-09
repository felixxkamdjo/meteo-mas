import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DayForecastList from './components/DayForecastList'
// import { WeatherProvider } from './components/WeatherContext'

const App = () => {

  return (
    <>
      {/* <WeatherProvider> */}
          <Routes>
              <Route path='/' element={<DayForecastList />} />
              <Route path='/home' element={<Home />} />
          </Routes>
      {/* </WeatherProvider> */}
    </>
  )
}

export default App