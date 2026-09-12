import Image from "next/image";
import ContactActions from "@/components/ContactActions";
import ContactForm from "@/components/ContactForm";
import { siteData } from "@/data/siteData";
export default function ContactPage() {
  return <main className="contact-page relative isolate overflow-hidden bg-[var(--navy)] text-white">
    <div className="contact-glow" aria-hidden="true" />
    <div className="relative mx-auto max-w-[1600px] px-5 py-16 sm:px-8 lg:py-24">
      <p className="eyebrow">India &amp; UAE &middot; Get in touch</p>
      <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-tight md:text-7xl">The right people.<br />The next opportunity.</h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/80">Connect with Shams for recruitment support or share your profile with our team.</p>
      <div className="contact-layout mt-12 grid gap-10">
        <div className="contact-visual min-w-0">
          <div className="contact-image"><Image src="/contact-hero.png" alt="Recruitment consultation at Shams Talent Management Services" fill priority sizes="(max-width: 1023px) 100vw, 58vw" className="object-cover" /></div>
          <div className="mt-8"><ContactActions /></div>
          <div className="mt-8 space-y-3 text-lg text-white/80">
            <p><a className="[overflow-wrap:anywhere] hover:text-white" href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a></p>
            <p>India: <a href={siteData.contact.phoneLink}>{siteData.contact.phone}</a></p>
            <p>UAE / WhatsApp: <a href={siteData.contact.whatsappLink}>{siteData.contact.whatsapp}</a></p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  </main>;
}
