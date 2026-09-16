"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteData } from "@/data/siteData";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  return <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-5 px-5 py-3 sm:px-8 xl:px-12">
      <Link href="/" aria-label="Shams home" onClick={() => setMenuOpen(false)} className="shrink-0"><Image src="/shams-logo-cropped.png" alt="Shams Talent Management Services" width={320} height={220} className="h-16 w-auto sm:h-20" priority /></Link>
      <nav aria-label="Main navigation" className="hidden items-center gap-6 xl:flex 2xl:gap-9">
        {siteData.navigation.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={`nav-link font-serif text-2xl font-semibold ${pathname === item.href ? "border-[var(--gold)]" : "border-transparent"}`}>{item.label}</Link>)}
      </nav>
      <div className="flex items-center gap-4">
        <a href={siteData.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="button button-gold header-call">Contact Us</a>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} onKeyDown={(event) => {if(event.key === "Escape") setMenuOpen(false);}} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-300 text-[var(--navy)] xl:hidden"><span aria-hidden="true" className="text-2xl">{menuOpen ? "\u00d7" : "\u2630"}</span></button>
      </div>
    </div>
    <nav id="mobile-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="max-h-[calc(100dvh-90px)] overflow-y-auto border-t border-slate-200 bg-white px-5 pb-5 xl:hidden">
      {siteData.navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} aria-current={pathname === item.href ? "page" : undefined} className={`block border-b border-slate-100 py-3 font-serif text-2xl font-semibold text-[var(--navy)] ${pathname === item.href ? "underline decoration-[var(--gold)] underline-offset-8" : ""}`}>{item.label}</Link>)}
      <a href={siteData.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="button button-gold mt-5">Contact Us</a>
    </nav>
  </header>;
}
