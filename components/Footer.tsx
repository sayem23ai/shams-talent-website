import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#071d40] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xl font-bold">SHAMS</p>

            <p className="mt-1 text-[14px] uppercase tracking-[0.2em] text-[var(--gold)]">
              Talent Management Services
            </p>

            <p className="mt-5 max-w-sm text-[17px] leading-6 text-white/75">
              Your Trusted Talent Acquisition Partner serving businesses across
              India and the UAE.
            </p>
          </div>

          <div>
            <p className="font-semibold">Quick Links</p>

            <div className="mt-5 flex flex-col gap-3">
              {siteData.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[17px] text-white/75 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-semibold">Contact</p>

            <div className="mt-5 space-y-3 text-[17px] text-white/75">
              <p className="[overflow-wrap:anywhere]"><a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a></p>
              <p><a href={siteData.contact.phoneLink}>{siteData.contact.phone}</a></p>
              <p><a href={siteData.contact.whatsappLink}>{siteData.contact.whatsapp}</a></p>
              <p>India & UAE</p>
            </div>

            <p className="mt-6 text-[14px] text-white/70">
              Strategic Partner: <a href={siteData.partner.website}>AHM Ventures</a>
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-[17px] text-white/70">
          © {new Date().getFullYear()} Shams Talent Management Services. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}