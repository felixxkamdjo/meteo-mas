import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DayForecastList from './components/DayForecastList'
import WeatherTopCard from './components/WeatherTopCard'
// import { WeatherProvider } from './components/WeatherContext'

const App = () => {

  return (
    <>
      {/* <WeatherProvider> */}
          <Routes>
              <Route path='/' element={<DayForecastList />} />
              <Route path='/home' element={<Home />} />
              <Route path='/day' element={<WeatherTopCard />} />
          </Routes>
      {/* </WeatherProvider> */}
    </>
  )
}

export default App