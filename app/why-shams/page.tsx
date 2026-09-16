import { siteData } from "@/data/siteData";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

function CheckCircleIcon() {
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/50 bg-[var(--gold)]/10 text-[var(--gold)]">
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12.5l4 4L19 7.5" />
      </svg>
    </span>
  );
}

function TargetIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="8" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 19c.7-3.3 2.7-5.2 5-5.2s4.4 1.9 5 5.2" />
      <path d="M13.5 15.2c2.8 0 4.9 1.3 5.8 3.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M15 15l5 5" />
    </svg>
  );
}

function CommunicationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M4 19V9M10 19V5M16 19v-7M22 19V3" />
      <path d="M3 15l6-6 5 3 7-8" />
    </svg>
  );
}

export default function WhyShamsPage() {
  const reasons = [
    {
      number: "01",
      title: "Quality Over Volume",
      text: "We focus on relevant, screened candidates rather than measuring success by how many CVs are sent.",
      icon: <TargetIcon />,
    },
    {
      number: "02",
      title: "More Time for Your Team",
      text: "We take on sourcing, screening, follow-ups and coordination so your internal team can focus on hiring decisions.",
      icon: <ClockIcon />,
    },
    {
      number: "03",
      title: "Direct Talent Access",
      text: "Our approach goes beyond job advertisements through direct sourcing, headhunting and passive candidate outreach.",
      icon: <SearchIcon />,
    },
    {
      number: "04",
      title: "Extension of Your Team",
      text: "We work alongside your internal HR and recruitment function rather than creating another layer to manage.",
      icon: <TeamIcon />,
    },
    {
      number: "05",
      title: "Clear Communication",
      text: "Structured communication keeps candidates, hiring managers and recruitment activity moving in the same direction.",
      icon: <CommunicationIcon />,
    },
    {
      number: "06",
      title: "Support That Can Scale",
      text: "Increase recruitment support when hiring demand rises and reduce it again when requirements stabilise.",
      icon: <GrowthIcon />,
    },
  ];

  return (
    <main className="w-full bg-white text-[#0b2a5b]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0b2a5b]">
        <div
          className="pointer-events-none absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(75,105,150,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(75,105,150,0.28) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
          }}
        />

        <div className="pointer-events-none absolute -left-48 -top-40 h-[600px] w-[600px] rounded-full border border-[#5573a3]/20" />
        <div className="pointer-events-none absolute -bottom-52 right-[5%] h-[520px] w-[520px] rounded-full border border-[var(--gold)]/10" />

        <div className="relative z-10 mx-auto grid min-h-[74vh] w-full max-w-[1800px] items-center gap-16 px-10 py-24 lg:grid-cols-[0.84fr_1.16fr] lg:px-16 xl:px-24 2xl:px-32">
          <Reveal>
            <div>
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)] md:text-[24px]">
                Why Shams
              </p>

              <h1 className="mt-5 max-w-[850px] font-serif text-[58px] font-bold leading-[0.98] tracking-[-0.035em] text-white md:text-[78px] lg:text-[94px]">
                Better hiring starts with a more focused recruitment process.
              </h1>

              <p className="mt-9 max-w-[760px] text-[26px] leading-[1.7] text-white/75 md:text-[29px]">
                We help organisations reduce recruitment noise, reach stronger
                candidates and create additional hiring capacity without
                unnecessarily increasing permanent headcount.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  "Relevant Candidates",
                  "Flexible Capacity",
                  "Focused Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg px-6 py-3 font-serif text-[17px] font-bold shadow-sm"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "var(--navy)",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <Image
                src="/why-shams-quality.png"
                alt="Quality-focused candidate selection"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1800px] px-10 py-28 lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="max-w-[1020px]">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What Makes Us Different
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-[#0b2a5b] md:text-[64px] xl:text-[76px]">
                Recruitment support built around the problems employers
                actually face.
              </h2>

              <p className="mt-8 max-w-[850px] text-[25px] leading-[1.75] text-[#566176]">
                The challenge is rarely finding people at all. The challenge is
                identifying the right people while protecting your
                team&apos;s time and maintaining a consistent recruitment
                process.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((item) => (
              <Reveal key={item.number}>
                <div className="group h-full border border-[#0b2a5b]/10 bg-[#f8f9fb] p-9 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(11,42,91,0.09)] md:p-10">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-serif text-[17px] font-bold tracking-[0.15em] text-[var(--gold)]">
                      {item.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center bg-[#0b2a5b] text-[var(--gold)]">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="mt-8 font-serif text-[34px] font-bold leading-[1.1] text-[#0b2a5b]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[23px] leading-[1.75] text-[#566176]">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING ALONGSIDE YOUR TEAM */}
      <section className="w-full bg-[#f7f8fa]">
        <div className="mx-auto grid w-full max-w-[1800px] items-center gap-20 px-10 py-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/why-shams-team.png"
                alt="Recruitment partnership and team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-[820px]">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Working Alongside Your Team
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-[#0b2a5b] md:text-[64px]">
                We&apos;re not trying to replace your internal recruitment
                function.
              </h2>

              <p className="mt-8 text-[25px] leading-[1.75] text-[#566176]">
                Your internal team understands your business, culture and
                hiring managers. Shams provides additional execution capacity
                for the recruitment work that consumes time and attention.
              </p>

              <p className="mt-6 font-serif text-[28px] font-bold leading-[1.3] text-[var(--gold)]">
                The goal is to make your existing team more productive.
              </p>

              <div className="mt-10 space-y-5">
                {[
                  "Your team keeps control of interviewing and final hiring decisions.",
                  "We provide sourcing, screening and coordination capacity.",
                  "Support can adapt around your existing recruitment workflow.",
                  "You avoid adding permanent headcount just to manage temporary hiring peaks.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-b border-[#0b2a5b]/10 pb-5"
                  >
                    <CheckCircleIcon />

                    <span className="pt-1 text-[23px] leading-[1.65] text-[#4f5d73]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUALITY OVER QUANTITY */}
      <section className="relative overflow-hidden bg-[#0b2a5b] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-[200px] -top-[220px] h-[650px] w-[650px] rounded-full border border-white/10" />
          <div className="absolute -bottom-[250px] right-[10%] h-[500px] w-[500px] rounded-full border border-[var(--gold)]/15" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-[1800px] gap-20 px-10 py-28 lg:grid-cols-[0.75fr_1.25fr] lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div>
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Quality Over Quantity
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[64px]">
                More CVs do not automatically mean better recruitment.
              </h2>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="max-w-[850px] text-[26px] leading-[1.75] text-white/75">
                Sending large numbers of profiles creates more reviewing,
                filtering and administration for your hiring team. We focus
                instead on relevance: candidates whose skills, experience and
                expectations align with the actual requirement.
              </p>

              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {[
                  {
                    title: "Less CV noise",
                    text: "Your team receives a more focused shortlist instead of large volumes of unsuitable profiles.",
                  },
                  {
                    title: "Better use of time",
                    text: "Hiring managers spend more time evaluating suitable candidates and less time filtering.",
                  },
                  {
                    title: "Stronger alignment",
                    text: "Requirements are understood before candidate search begins.",
                  },
                  {
                    title: "Clearer pipeline",
                    text: "A more focused process makes recruitment progress easier to understand and manage.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border-l-2 border-[var(--gold)] bg-white/[0.06] px-7 py-7"
                  >
                    <h3 className="font-serif text-[27px] font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[22px] leading-[1.7] text-white/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOUR BUSINESS GAINS */}
      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-[1900px] items-stretch gap-12 px-10 py-28 lg:grid-cols-[1.4fr_0.6fr] lg:px-12 xl:px-16 2xl:px-20 2xl:py-36">
          <Reveal>
            <div className="relative min-h-[720px] w-full overflow-hidden lg:min-h-[820px]">
              <Image
                src="/why-shams-growth.png"
                alt="Business growth and stronger hiring outcomes"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 70vw"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                What Your Business Gains
              </p>

              <h2 className="mt-5 max-w-[650px] font-serif text-[46px] font-bold leading-[1.05] tracking-[-0.025em] text-[#0b2a5b] md:text-[58px]">
                Recruitment support that creates more room for your team to
                focus.
              </h2>

              <div className="mt-10 grid gap-6">
                {[
                  {
                    number: "01",
                    title: "More recruitment capacity",
                    text: "Add execution support without immediately adding another permanent recruiter.",
                  },
                  {
                    number: "02",
                    title: "More time for hiring",
                    text: "Your team can focus more attention on interviewing, evaluating and selecting candidates.",
                  },
                  {
                    number: "03",
                    title: "Support for difficult roles",
                    text: "Targeted search methods can reach talent that may not be actively applying to job advertisements.",
                  },
                  {
                    number: "04",
                    title: "A more organised process",
                    text: "Clear sourcing, screening and coordination help keep recruitment moving consistently.",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="grid gap-4 border-b border-[#0b2a5b]/10 pb-6 sm:grid-cols-[55px_1fr]"
                  >
                    <span className="font-serif text-[18px] font-bold text-[var(--gold)]">
                      {item.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-[27px] font-bold text-[#0b2a5b]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-[22px] leading-[1.7] text-[#566176]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHEN SHOULD YOU WORK WITH US */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0b2a5b 1px, transparent 1px), linear-gradient(90deg, #0b2a5b 1px, transparent 1px)",
            backgroundSize: "105px 105px",
          }}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1800px] px-10 py-28 lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="max-w-[1000px]">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                When Should You Work With Us?
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] text-[#0b2a5b] md:text-[64px] xl:text-[72px]">
                You don&apos;t necessarily need us for every vacancy.
              </h2>

              <p className="mt-8 max-w-[830px] text-[25px] leading-[1.75] text-[#566176]">
                Shams is most valuable when your hiring requirements begin
                placing pressure on your internal recruitment capacity.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-x-12 gap-y-5 md:grid-cols-2">
            {[
              "You have too many open positions at the same time.",
              "Your internal recruitment team is stretched.",
              "You need to hire quickly.",
              "You are recruiting for niche or specialist positions.",
              "Your team is struggling to identify suitable candidates.",
              "You need temporary recruitment capacity without permanent headcount.",
              "You want more structured sourcing, screening and candidate coordination.",
              "You need direct access to passive candidates beyond job boards.",
            ].map((item) => (
              <Reveal key={item}>
                <div className="flex items-start gap-4 border-b border-[#0b2a5b]/10 py-5">
                  <CheckCircleIcon />

                  <p className="pt-1 font-serif text-[21px] font-bold leading-[1.5] text-[#0b2a5b]">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1800px] px-10 py-24 lg:px-16 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="relative overflow-hidden bg-[#0b2a5b] px-10 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute -right-24 -top-28 h-[360px] w-[360px] rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-44 -left-28 h-[450px] w-[450px] rounded-full border border-[var(--gold)]/15" />

              <div className="relative z-10">
                <p className="font-serif text-[20px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Work With Shams
                </p>

                <h2 className="mx-auto mt-5 max-w-[1000px] font-serif text-[46px] font-bold leading-[1.08] text-white md:text-[60px] xl:text-[70px]">
                  Need more recruitment capacity without adding more internal
                  workload?
                </h2>

                <p className="mx-auto mt-7 max-w-[760px] text-[24px] leading-[1.7] text-white/70 md:text-[26px]">
                  Tell us about your current hiring requirements and we can
                  discuss where Shams can support your team.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href="/services"
                    className="bg-[var(--gold)] px-10 py-4 font-serif text-[21px] font-bold !text-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--gold)] hover:!text-[var(--navy)]"
                  >
                    Explore Services
                  </Link>

                  <Link
                    href={siteData.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[var(--gold)] px-10 py-4 font-serif text-[21px] font-bold !text-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--gold)] hover:!text-[var(--navy)]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
