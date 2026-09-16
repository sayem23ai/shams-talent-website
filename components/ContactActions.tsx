import { siteData } from "@/data/siteData";
export default function ContactActions() {
  return <div className="flex flex-wrap gap-4">
    <a className="button button-gold" href={siteData.contact.whatsappLink} target="_blank" rel="noopener noreferrer">Contact Us</a>
    <a className="button button-outline" href={siteData.candidateCTA.href}>Send CV</a>
  </div>;
}
