"use client";

import { useState } from "react";
import Header from "@/components/header/Header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={menuOpen ? "contenu-trofel blur" : "contenu-trofel"}>{children}</div>
    </>
  );
}
