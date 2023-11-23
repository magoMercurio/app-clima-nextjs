import useSearchCity from "@/hooks/useSearchCity"

export default function CurrentCard() {

  const { weatherData, loading, error } = useSearchCity()
  return (
    <>
    <aside className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-xl capitalize mb-4 ">clima de hoy</h2>
    {loading && <div>Cargando...</div>}
      {error && <div>Error: {error.message}</div>}
      {weatherData && (
        <div>
          <h3 className="text-lg mb-4"> {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h3>
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



current
: 
cloud
: 
100
condition
: 
code
: 
1189
icon
: 
"//cdn.weatherapi.com/weather/64x64/night/302.png"
text
: 
"Lluvia moderada"
feelslike_c
: 
14.1
feelslike_f
: 
57.4
gust_kph
: 
17
gust_mph
: 
10.6
humidity
: 
72
is_day
: 
0
last_updated
: 
"2023-11-22 19:45"
last_updated_epoch
: 
1700703900
precip_in
: 
0
precip_mm
: 
0
pressure_in
: 
30.22
pressure_mb
: 
1023
temp_c
: 
15
temp_f
: 
59
uv
: 
1
vis_km
: 
9.7
vis_miles
: 
6
wind_degree
: 
170
wind_dir
: 
"S"
wind_kph
: 
11.2
wind_mph
: 
6.9