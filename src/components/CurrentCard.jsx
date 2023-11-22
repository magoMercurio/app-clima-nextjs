import useSearchCity from "@/hooks/useSearchCity"

export default function CurrentCard() {

  const { weatherData, loading, error } = useSearchCity()
  return (
    <>
    <aside className="flex justify-center mt-8">
      <h2>Clima de Hoy</h2>
    {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
      {weatherData && (
        <div>
          {/* Renderiza los datos del clima según tus necesidades */}
          <p>Temperatura: {weatherData.current.temp_c}°C</p>
          {/* Agrega más elementos según sea necesario */}
        </div>
      )}
    </aside>
    </>
  )
}