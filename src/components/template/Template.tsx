"use client";

import { ReactNode } from "react";
import Header from "../header/Header";
import "./template.css";

interface TemplateProps {
  children: ReactNode;
}

export default function Template({ children }: TemplateProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
