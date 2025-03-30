"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsList, BsXLg } from "react-icons/bs";
import "./header.css"

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const pathname = usePathname();

  return (
    <nav>
      <div className="logo">
        <img src="/logo/mc-white.png" alt="Logo" />
      </div>
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
          <Link href="/" className={pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/pages/musics" className={pathname === "/pages/musics/music" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Musique
          </Link>
        </li>
        <li>
          <Link href="/pages/film" className={pathname === "/pages/film" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Film
          </Link>
        </li>
        <li>
          <Link href="/pages/contact" className={pathname === "/pages/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
