import Temporizador from './Temporizador'

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-3 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-semibold tracking-wide">Mini Blog 📝</h1>
      <div className="text-sm opacity-80">
        <Temporizador />
      </div>
    </nav>
  )
}

export default Navbar
