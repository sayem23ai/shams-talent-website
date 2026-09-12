import Image from "next/image";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import ContactActions from "@/components/ContactActions";
import RecruitmentFlow from "@/components/RecruitmentFlow";
import RecruitmentIcon, { type RecruitmentIconName } from "@/components/RecruitmentIcon";

const challenges: { title: string; text: string; icon: RecruitmentIconName }[] = [
  { title: "Overloaded teams", text: "Internal TA teams have more vacancies than their time and sourcing capacity can comfortably support.", icon: "team" },
  { title: "Time spent sourcing", text: "Searching, approaching and screening candidates takes recruiters away from evaluating and hiring.", icon: "time" },
  { title: "Irrelevant applications", text: "Job postings can generate volume without producing enough genuinely relevant profiles.", icon: "quality" },
  { title: "Hard-to-find talent", text: "Niche and senior positions often need targeted sourcing, headhunting and passive candidate identification.", icon: "search" },
  { title: "Changing hiring demand", text: "A sudden increase in vacancies does not always justify another permanent recruiter.", icon: "capacity" },
  { title: "Duplicated submissions", text: "Multiple agencies can create duplicated candidates, inconsistent screening and unnecessary noise.", icon: "quality" },
];

export default function Home() {
  return <main className="home-page text-[var(--navy)]">
    <Hero />
    <section className="editorial-section">
      <div className="editorial-shell editorial-split">
        <Reveal>
          <p className="eyebrow">Who we are</p>
          <h2>A focused extension of your hiring team.</h2>
          <div className="editorial-copy">
            <p>Shams Talent Management Services supports organisations with focused, dependable and flexible recruitment support across India and the UAE.</p>
            <p>We work around your hiring process, understand your requirements and operate as an additional layer of your recruitment function. Our role is to bring the time, sourcing capacity and execution support your internal team needs.</p>
            <p>Your recruiters know your company, culture and hiring managers. We support their work by finding, screening and coordinating candidates who are worth interviewing.</p>
          </div>
        </Reveal>
        <Reveal delay={150}><Image src="/about-team.png" alt="Recruitment colleagues discussing hiring requirements" width={1536} height={1024} sizes="(max-width: 1023px) 100vw, 50vw" className="editorial-image" /></Reveal>
      </div>
    </section>

    <section className="editorial-section bg-[#f7f8fa] subtle-pattern">
      <div className="editorial-shell">
        <Reveal><div className="home-section-intro">
          <div><p className="eyebrow">The hiring challenge</p><h2>More applications do not always mean better hires.</h2></div>
          <div className="editorial-copy"><p>Hiring is rarely difficult simply because there are no candidates. The challenge is finding relevant people while managing the everyday work of recruitment.</p><p>When teams are stretched, sourcing, screening and follow-ups compete with interviews and hiring decisions. Adding more CVs can add to that workload without solving the underlying capacity problem.</p></div>
        </div></Reveal>
        <div className="home-challenges">{challenges.map((item, index) => <Reveal key={item.title} delay={index % 3 * 100}><article><span className="point-icon"><RecruitmentIcon name={item.icon} /></span><h3>{item.title}</h3><p>{item.text}</p></article></Reveal>)}</div>
      </div>
    </section>

    <section className="editorial-section editorial-navy subtle-pattern">
      <div className="editorial-shell">
        <Reveal><div className="home-section-intro">
          <div><p className="eyebrow">How Shams helps</p><h2>Recruitment capacity.<br />From search to shortlist.</h2></div>
          <div className="editorial-copy"><p>We take ownership of the recruitment work you do not have the time or capacity to handle. Our approach combines direct sourcing, headhunting, candidate screening and structured shortlisting.</p><p>We coordinate candidate communication and interview arrangements to keep the process moving. Your team receives profiles that have already gone through an initial screening process, while retaining the final hiring decision.</p></div>
        </div></Reveal>
        <Reveal delay={100}><div className="solution-flow"><p>We handle the recruitment execution:</p><RecruitmentFlow text="Sourcing → Headhunting → Screening → Shortlisting → Candidate Coordination" /><p>Your team focuses on the hiring decisions:</p><RecruitmentFlow text="Interviewing → Evaluating → Selecting → Hiring" /></div></Reveal>
      </div>
    </section>

    <section className="editorial-section">
      <div className="editorial-shell editorial-split">
        <Reveal><Image src="/services-projects.png" alt="A team planning its recruitment requirements" width={1536} height={1024} sizes="(max-width: 1023px) 100vw, 50vw" className="editorial-image" /></Reveal>
        <Reveal delay={150}>
          <p className="eyebrow">Flexible recruitment capacity</p>
          <h2>Support that responds to your hiring demand.</h2>
          <div className="editorial-copy">
            <p>You may not need another permanent recruiter. You may simply need more recruiting capacity right now.</p>
            <p>Hiring requirements change. Some months bring a few vacancies; others bring multiple open positions, urgent requirements or a difficult specialist search. Shams provides additional support when your internal team is stretched.</p>
            <p>You can add recruitment capacity without immediately increasing permanent headcount. Our support adapts to individual roles, ongoing hiring and larger project requirements, working around your existing recruitment process.</p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="editorial-section bg-[#f7f8fa]">
      <div className="editorial-shell">
        <Reveal><div className="home-section-intro">
          <div><p className="eyebrow">India &amp; UAE</p><h2>People. Partnership.<br />Stronger teams.</h2></div>
          <div className="editorial-copy"><p>Shams supports organisations across India and the United Arab Emirates with focused recruitment services. Our work centres on understanding each role and identifying candidates who align with the actual requirements.</p><p>Whether you need help with an individual vacancy, a niche position or a larger hiring requirement, the emphasis stays on relevant candidates, clear communication and coordinated support for your team.</p></div>
        </div></Reveal>
        <Reveal><Image src="/about-presence.png" alt="India and the UAE, the markets served by Shams" width={1984} height={794} sizes="(max-width: 1280px) 100vw, 1280px" className="editorial-image presence-image" /></Reveal>
        <Reveal><div className="home-contact-strip"><div><h3>Connect with Shams.</h3><p>Discuss your hiring needs or share your CV with our recruitment team.</p></div><ContactActions /></div></Reveal>
      </div>
    </section>
  </main>;
}
