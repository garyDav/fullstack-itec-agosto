import Link from "next/link"
import { ActiveLink } from "./ActiveLink"

const navItems = [
  { path: '/about', text: 'About' },
  { path: '/contact', text: 'Contact' },
  { path: '/pricing', text: 'Pricing' }
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 text-gray-100 bg-opacity-30 p-2 m-2">
      <Link href={'/'} className="">Home</Link>

      <div className="flex flex-1"></div>

      <ul className="flex gap-2">
        {
          navItems.map(navItem => (
            <ActiveLink key={navItem.path} {...navItem} />
          ))
        }
      </ul>
    </nav>
  )
}
