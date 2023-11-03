const API = process.env.API_URL
const VERSION = process.env.API_URL_VERSION
const API_KEY = process.env.API_KEY
const URL = `${API}/${VERSION}/`

const endPoints = {
  currentWeather: {
    getCurrentWeather: `${URL}weather?q=London,uk&appid=${API_KEY}`
  }
}