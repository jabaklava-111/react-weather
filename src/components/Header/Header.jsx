import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getWeatherInfo } from "../../store/getWeatherSlice"

const Header = () => {
  const changeTheme = () => {
    let body = document.querySelector('body');
    localStorage.setItem('theme', JSON.stringify(body.className))
    let isDark = JSON.parse(localStorage.theme)
    if(isDark === 'light'){
      body.classList.remove('light')
      body.classList.add('dark')
      localStorage.theme = JSON.stringify('dark')
    }else{
      body.classList.remove('dark')
      body.classList.add('light')
      localStorage.theme = JSON.stringify('light')
    }
  }
  useEffect(() => {
    let body = document.querySelector('body');
    body.classList.add(localStorage.theme ? JSON.parse(localStorage.theme) : 'light')
  }, [])
  
  const [city, setCity] = useState('')  
  const dispatch = useDispatch()
  const changeWeather = (city) => {
    dispatch(getWeatherInfo(city))
  }
  
  useEffect(() => {
    if(city) changeWeather(city)
    else changeWeather('Ташкент')
  }, [city])
  
  return (
    <header className="header">
        <a href=""><img src="logo.svg" alt="" /></a>
        <div className="header__right">
            <button onClick={() => changeTheme()}><img src="invert.svg" alt="" /></button>
            <input 
              type="text"
              placeholder="Выбрать город"
              autoFocus 
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
        </div>
    </header>
  )
}

export default Header