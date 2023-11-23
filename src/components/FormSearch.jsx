import { useState, useContext } from 'react'
import useSearchCity from '@/hooks/useSearchCity'

export default function FormSearch() {


  const { searchCity } = useSearchCity()

  const [sCity, setSCity] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    searchCity(sCity)

  }

  return (
    <>
      <form 
        action=""
        method="get"
        className=" ml-4 mt-8 gap-2 flex flex-row justify-center items-center text-lg"
      >
        <label 
          htmlFor="current"
          className="capitalize"
        >
          ciudad
        </label>
        <input className="border-2 border-gray-300 hover:border-blue-400 rounded-xl p-2 text-sm text-black"
          type="text"
          name="city"
          id="city"
          placeholder="Escribe tu ciudad"
          onChange= {(e) => setSCity(e.target.value)}
          value={sCity}
          required
          autoComplete="on"
          maxLength={50}
          minLength={3}
          spellCheck="true"

          autoFocus
        />
        <button className="transition-colors duration-150 ease-in-out delay-150 bg-blue-600  text-white rounded-xl p-2 text-sm hover:bg-blue-400"
        onClick={handleSubmit}
        >
          Buscar
        </button>
      </form>
    </>
  )
  
}
