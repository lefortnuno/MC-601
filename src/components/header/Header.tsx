"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsList, BsXLg } from "react-icons/bs";
import "./header.css";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  const pathname = usePathname();

  return (
    <nav>
      <div className="logo">
        <Link href="/" onClick={() => setMenuOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/baboke-icon-white.png"
            alt="Baboke Films"
            width={72}
            height={88}
          />
        </Link>
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
          <Link
            href="/pages/musics"
            className={pathname === "/pages/musics" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Musique
          </Link>
        </li>
        <li>
          <Link
            href="/pages/film"
            className={pathname === "/pages/film" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Film
          </Link>
        </li>
        {/* <li>
          <Link
            href="/pages/multimedia"
            className={pathname === "/pages/multimedia" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Multimedia
          </Link>
        </li> */}
        <li>
          <Link
            href="/pages/services"
            className={pathname === "/pages/services" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            href="/pages/contact"
            className={pathname === "/pages/contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
