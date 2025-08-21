"use client";
import { FooterSection } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}

export default BaseLayout;
