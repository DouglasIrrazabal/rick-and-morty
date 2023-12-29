import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="w-2/3 mx-auto bg-black py-4 rounded-full mt-3">
      <nav className='container mx-auto px-8 flex items-center justify-between'>
        <p className="font-bold text-xl text-white">
          Rick and Morty
        </p>
        <ul className="grid grid-cols-3 gap-4 text-white">
          <li>
            <NavLink
              to='/characters'
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : ""
                }
              }}
            >
              Characters
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/locations'
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : ""
                }
              }}
            >
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/episodes'
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : ""
                }
              }}
            >
              Episodes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
