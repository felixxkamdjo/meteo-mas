import { Menu, MenuButton, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'
import { Link } from 'react-router-dom'

const DropdownButton = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md">
            <Bars3Icon className="h-6 w-6 text-gray-700" aria-hidden="true" />
          </MenuButton>

          {/* Sidebar qui glisse */}
          <div
            className={`fixed top-0 left-0 h-full w-60 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
              ${open ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <nav className="mt-16 flex flex-col space-y-4 px-4">
              <Link to="/" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                Home
              </Link>
              <Link to="/maps" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                Maps
              </Link>
              <Link to="/about" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                About App
              </Link>
              <Link to="/terms" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                Contact Us
              </Link>
              <Link to="/settings" className="text-gray-700 hover:bg-gray-100 px-3 py-2 rounded" >
                Settings
              </Link>
            </nav>
          </div>

          {/* Overlay sombre quand menu ouvert */}
          {open && (
            <div
              className="fixed inset-0 bg-black opacity-30 z-30"
              aria-hidden="true"
            />
          )}
        </>
      )}
    </Menu>
  )
}

export default DropdownButton
