"use client";
import { useState, type FormEvent } from "react";
import { siteData } from "@/data/siteData";
export default function ContactForm() {
  const [country, setCountry] = useState("India");
  const [handoff, setHandoff] = useState(false);
  const code = country === "India" ? "+91" : "+971";
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;

    const data = new FormData(event.currentTarget);
    const value = (field: string) => String(data.get(field) ?? "").trim();
    const name = value("name");
    const phone = value("phone");
    const message = value("message");
    const subject = name ? `New Website Enquiry - ${name}` : "New Website Enquiry - Shams Talent";
    const lines = [
      ["Name", name],
      ["Email", value("email")],
      ["Country", value("country")],
      ["Phone", phone ? [value("code"), phone].filter(Boolean).join(" ") : ""],
      ["City", value("city")],
      ["Position Applying For", value("position")],
    ].filter(([, content]) => content).map(([label, content]) => `${label}: ${content}`);
    const body = [lines.join("\n"), message ? `Message:\n${message}` : ""].filter(Boolean).join("\n\n");

    window.location.href = `mailto:${siteData.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setHandoff(true);
  }
  return <form onSubmit={submit} className="contact-form rounded-lg bg-white p-6 text-[var(--navy)] sm:p-9">
    <h2 className="font-serif text-3xl font-bold">Start a conversation</h2>
    <p className="mt-3 text-lg leading-relaxed text-slate-600">Share your details for a hiring enquiry or application.</p>
    <div className="mt-7 grid gap-5 sm:grid-cols-2">
      <label className="sm:col-span-2">Full Name<input name="name" autoComplete="name" required maxLength={120} /></label>
      <label className="sm:col-span-2">Email Address<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label className="sm:col-span-2">Country<select aria-label="Country" name="country" autoComplete="country-name" value={country} onChange={(event) => setCountry(event.target.value)}><option>India</option><option>United Arab Emirates</option></select></label>
      <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3 sm:col-span-2">
        <label>Code<select name="code" aria-label="Phone country code" value={code} onChange={(event) => setCountry(event.target.value === "+91" ? "India" : "United Arab Emirates")}><option>+91</option><option>+971</option></select></label>
        <label>Phone Number<input name="phone" type="tel" autoComplete="tel-national" inputMode="tel" required minLength={7} maxLength={18} /></label>
      </div>
      <label>City<input name="city" autoComplete="address-level2" required maxLength={100} /></label>
      <label>Position Applying For<input name="position" maxLength={150} aria-describedby="position-help" /></label>
      <p id="position-help" className="-mt-2 text-base text-slate-600 sm:col-span-2">For candidates; leave blank for an employer enquiry.</p>
      <label className="sm:col-span-2">Message (optional)<textarea name="message" rows={3} maxLength={1500} /></label>
    </div>
    <p className="mt-5 text-base leading-relaxed text-slate-600">This opens a draft in your email app. Review it, attach your CV if applicable, and send it there.</p>
    <button type="submit" className="button button-gold mt-5 w-full">Prepare Email</button>
    {handoff && <p role="status" className="mt-4 text-base leading-relaxed">Your email app was requested. Your enquiry has not been sent by this website. If no draft opened, email <a className="underline [overflow-wrap:anywhere]" href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a> directly.</p>}
  </form>;
}
