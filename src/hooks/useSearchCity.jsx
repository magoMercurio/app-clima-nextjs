import { useState, useEffect } from 'react';

const useSearchCity = () => {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `${API}${VERSION}`;

  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchCity = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}current.json?q=${city}&lang=es&key=${API_KEY}`);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    // Aquí puedes realizar acciones adicionales cuando cambia weatherData
    console.log('Weather Data:', weatherData);  //QUITAR EL CONSOLE LOG AL TERMINAR PROYECTO
  }, [weatherData]); 

  return { searchCity, weatherData, loading, error };

}




export default useSearchCity;