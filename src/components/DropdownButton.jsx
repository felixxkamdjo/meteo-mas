import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'

const DropdownButton = () => {
  return (
    <>
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                    <Bars3Icon aria-hidden="true" className="size-5 text-gray-400" />
                </MenuButton>
            </div>

            <MenuItems transition className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                <div className="py-1">
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Home
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Maps
                        </a>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        About App
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Terms conditions
                        </a>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Privacy Policy
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Contact us
                        </a>
                    </MenuItem>
                </div>
                <div className="py-1">
                    <MenuItem>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Settings
                        </a>
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    </>
  )
}

export default DropdownButton;