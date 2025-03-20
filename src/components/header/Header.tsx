"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import "./header.css";
import { BsList, BsXLg } from "react-icons/bs";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="logo">Trofel</div>
      <input
        type="checkbox"
        id="click"
        checked={menuOpen}
        onChange={() => setMenuOpen(!menuOpen)}
      />
      <label htmlFor="click" className="menu-btn">
        {menuOpen ? <BsXLg className="icon" /> : <BsList className="icon" />}
      </label>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link
            href="/"
            className={"nav-list " + (pathname === "/" ? "active" : "")}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/musique"
            className={"nav-list " + (pathname === "/musique" ? "active" : "")}
          >
            Musique
          </Link>
        </li>
        <li>
          <Link
            href="/film"
            className={"nav-list " + (pathname === "/film" ? "active" : "")}
          >
            Film
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={"nav-list " + (pathname === "/contact" ? "active" : "")}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
