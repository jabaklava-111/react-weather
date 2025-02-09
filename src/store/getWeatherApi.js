import axios from "axios";
const API_KEY = 'ea8274c23d69472828079f18267fc41b'
const API_GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct?'
const API_WEATHER_URL = 'https://api.openweathermap.org/data/2.8/onecall?'

export const getWeatherData = async (city) => {
    try {
        const geoResponse = await axios.get(
            `${API_GEO_URL}q=${city}&appid=${API_KEY}`
        )
        const {lat, lon, local_names:names} = geoResponse.data[0]
        const weatherResponse = await axios.get(
            `${API_WEATHER_URL}lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&lang=ru&appid=${API_KEY}`
        )     
        const allData = { ...weatherResponse.data, names } 
        return {
            geoData: geoResponse.data,
            weatherData: allData
        }
    } catch (error) {
        console.error(error)
    }
}