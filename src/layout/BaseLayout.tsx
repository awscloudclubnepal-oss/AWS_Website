"use client";
import { FooterSection } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <FooterSection />
    </div>
  );
}

export default BaseLayout;
