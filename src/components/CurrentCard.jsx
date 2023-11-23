import useSearchCity from "@/hooks/useSearchCity"

export default function CurrentCard() {

  const { weatherData, loading, error } = useSearchCity()
  return (
    <>
    <aside className="flex flex-col items-center justify-center mt-8 w-fit bg-slate-700 rounded-2xl">
      
    {loading && <div>Cargando...</div>}
      {error && <div>Error: {error.message}</div>}
      {weatherData && (
        <div className="p-2">
          <h2 className="text-xl font-bold capitalize text-center mb-4 ">clima de hoy</h2>
          <h3 className="text-lg mb-4 flex justify-center"> {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h3>
          <div>Temperatura: {weatherData.current.temp_c}°C</div>
          <div className="flex flex-row items-center">
            <p> {weatherData.current.condition.text} </p>
            <img src={weatherData.current.condition.icon} alt="icono del clima" />
          </div>
          <ul>
            <li>velocidad del viento: {weatherData.current.wind_kph} km/h, direccion: {weatherData.current.wind_dir} </li>
            <li>Humedad: {weatherData.current.humidity}% </li>
          </ul>
        </div>
      )}
    </aside>
    </>
  )
}