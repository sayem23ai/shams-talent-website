import Image from "next/image";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import { siteData } from "@/data/siteData";
export default function Hero() {
  return <section id="home" className="bg-[#f7f8fa] text-[var(--navy)]">
    <div className="mx-auto grid max-w-[1500px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-16 lg:py-24">
      <Reveal className="min-w-0">
        <p className="eyebrow">{siteData.brand.tagline}</p>
        <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">Find the right people.<br />Build stronger teams.</h1>
        <p className="mt-7 max-w-xl text-xl leading-relaxed text-slate-600">{siteData.brand.description}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={siteData.contact.phoneLink} className="button button-gold">Contact Us</a>
          <Link href="/services" className="button border border-[var(--navy)]/20 bg-white">Explore Services</Link>
        </div>
        <p className="mt-8 text-base font-semibold text-slate-600">India &middot; UAE &middot; Focused Recruitment Support</p>
      </Reveal>
      <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-lg"><Image src="/hero-recruitment.png" alt="Professional recruitment meeting" fill priority sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-right" /></div>
    </div>
  </section>;
}
