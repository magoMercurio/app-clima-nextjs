

export default function FormSearch() {
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
        <input type="text"
          name="current"
          id="current"
          placeholder="Escribe tu ciudad"
          autoFocus
          className="border-2 border-gray-300 hover:border-blue-400 rounded-xl p-2 text-sm text-black"
        />
      </form>
    </>
  )
}