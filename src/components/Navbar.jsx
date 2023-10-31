

export default function Navbar() {
  return (
    <header className=" h-8 flex flex-row justify-evenly items-center gap-4">
      <h1 className=" text-2xl">Weather App</h1> {/* cambiar por logo */}
      <nav className="flex justify-center">
        <ul className="flex flex-row gap-4">
          <li>Home</li>
          <li>Clima de Hoy</li>
          <li>Mi Portfolio</li>
        </ul>
      </nav>
      <div>
        {/* cambiar por iconos */}
        <ul className="flex flex-row gap-2">
          <li>X</li>
          <li>LinkedIn</li>
          <li>Github</li>
          
        </ul>
      </div>
    </header>
  )
}

