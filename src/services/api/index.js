const API = process.env.NEXT_PUBLIC_API_URL
const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const URL = `${API}${VERSION}`

const city = ''

const endPoints = {
  currentWeather: {
    getCurrentWeather: `${URL}current.json?q=${city}&lang=es&key=${API_KEY}`
  }
}