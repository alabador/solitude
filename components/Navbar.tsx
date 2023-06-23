"use client";
import { useState } from "react"
import NavMobileMenu from "./NavMobileMenu";

export default function Navbar() {
	const [toggleNav, setToggleNav] = useState(false);
	
	const handleNavFocus = () => {
		setToggleNav(true);
	}

	const handleNavLeave = () => {
		setToggleNav(false);
	}

  return (
    <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Solitude</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost md:hidden relative" onFocus={handleNavFocus} onBlur={handleNavLeave}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            { toggleNav ? (
							<NavMobileMenu />
						) : (
							null
						)

						}
          </button>

          <ul className="menu menu-horizontal px-1 hidden md:inline-flex">
            <li>
              <a>Guild Members</a>
            </li>
            <li>
              <a>Guild Info/FAQ</a>
            </li>
            <li>
              <a>Resources</a>
            </li>
          </ul>

        </div>
      </div>
  )
}
