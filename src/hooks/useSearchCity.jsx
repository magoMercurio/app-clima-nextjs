import { useState, useEffect, useContext } from 'react';
import { WeatherContext } from "@/Context/WeatherContext"

const useSearchCity = () => {
  const API = process.env.NEXT_PUBLIC_API_URL;
  const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const URL = `${API}${VERSION}`;

  const context = useContext(WeatherContext);
  const { weatherData, setWeatherData, loading,  setLoading, error, setError } = context

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
  };

  useEffect(() => {

  }, [weatherData]);

  return { searchCity, weatherData, loading, error };
};

export default useSearchCity;
