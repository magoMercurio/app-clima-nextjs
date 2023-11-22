import { useState } from 'react'

const API = process.env.NEXT_PUBLIC_API_URL
const VERSION = process.env.NEXT_PUBLIC_API_URL_VERSION
const API_KEY = process.env.NEXT_PUBLIC_API_KEY
const URL = `${API}${VERSION}`

const searchCity = async (city) => {

  const response = await fetch(`${URL}current.json?q=${city}&lang=es&key=${API_KEY}`)
  const data = await response.json()
  return data
  }

export default function FormSearch() {

  const [sCity, setSCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await searchCity(sCity)
    console.log("data", data)
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
        <button className="bg-blue-400 text-white rounded-xl p-2 text-sm"
        onClick={handleSubmit}
        >
          Buscar
        </button>
      </form>
    </>
  )
  
}
