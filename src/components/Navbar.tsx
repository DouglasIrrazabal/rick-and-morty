import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header className="w-5/6 md:w-2/3 mx-auto py-4 rounded-2xl mt-3 bg-neutral-900">
      <nav className='container mx-auto px-8 flex items-center justify-center'>
        <h1 className="font-bold text-xl text-white">
          <NavLink to='/rick-and-morty'>
            Rick and Morty
          </NavLink>
        </h1>
      </nav>
    </header>
  )
}
