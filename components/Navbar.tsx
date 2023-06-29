"use client";
import { useEffect, useRef, useState } from "react";
import NavMobileMenu from "./NavMobileMenu";
import { unicaOne } from "@/styles/fonts";
import Link from "next/link";

export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    setToggleNav((prev) => !prev)
  }

  useEffect(() => {
    if (toggleNav) {
      setTimeout(() => {
        navRef.current?.focus();
      }, 200)
    }
    
    const handler = (e:any) => {
      if(
        toggleNav &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setToggleNav(false);
      }
    }

    document.addEventListener('mousedown', handler);
    
    return () => {
      document.removeEventListener('mousedown', handler);
    }
  }, [toggleNav])

  return (
    <header className={`${unicaOne.className} navbar bg-base-100`}>
      <div className="flex-1">
        <Link 
        className="btn btn-ghost normal-case text-xl"
        href="/"
        >Solitude</Link>
      </div>
      <div className="flex-none">
        <button
          className={`${toggleNav && 'h-0 w-0'} btn btn-square btn-ghost md:hidden relative`}
          onClick={handleClick}
        >
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
          {toggleNav ? <NavMobileMenu ref={navRef}/> : null}
        </button>
        <nav>
          <ul className="menu menu-horizontal px-1 hidden md:inline-flex">
            <li>
              <Link href="/members">Guild Members</Link>
            </li>
            <li>
              <Link href="/faq">Guild Info/FAQ</Link>
            </li>
            <li>
              <Link href="/resources">Resources</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
