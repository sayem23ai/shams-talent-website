import { siteData } from "@/data/siteData";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

function CheckIcon() {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 text-[var(--gold)]">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12.5l4 4L19 7.5" />
      </svg>
    </span>
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
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16l4 4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3.5 19c.7-3 2.7-5 5.5-5s4.8 2 5.5 5" />
      <path d="M14 15c2.7 0 4.6 1.4 5.5 4" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 4.5h6" />
      <path d="M8 9h8M8 13h8M8 17h5" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M7.5 12.5l3-3a2 2 0 012.8 0l1.7 1.7" />
      <path d="M4 13l4.5 4.5a2 2 0 002.8 0l1-1" />
      <path d="M20 13l-4.5 4.5a2 2 0 01-2.8 0l-3.3-3.3" />
      <path d="M2.5 9l4-4 3 3M21.5 9l-4-4-3 3" />
    </svg>
  );
}

export default function ServicesPage() {
  const coreServices = [
    {
      number: "01",
      title: "Talent Sourcing",
      text: "Access active and passive candidates through focused sourcing across relevant networks, platforms and professional channels.",
      icon: <SearchIcon />,
    },
    {
      number: "02",
      title: "Screening & Shortlisting",
      text: "Structured screening helps identify candidates who match the role, experience requirements and business expectations.",
      icon: <ClipboardIcon />,
    },
    {
      number: "03",
      title: "Interview Coordination",
      text: "We support communication, scheduling and candidate follow-ups so the process keeps moving smoothly.",
      icon: <HandshakeIcon />,
    },
    {
      number: "04",
      title: "Bulk & Project Recruitment",
      text: "Flexible recruitment capacity for growing teams, multiple vacancies and larger hiring projects.",
      icon: <UsersIcon />,
    },
  ];

  const specialistServices = [
    "Direct sourcing and headhunting",
    "Passive candidate identification",
    "Talent mapping",
    "Market research",
    "Niche and senior-role search",
    "Flexible recruitment capacity",
  ];

  const flexibleItems = [
    {
      number: "01",
      title: "Hiring demand increases",
      text: "Add recruitment capacity without immediately expanding permanent headcount.",
    },
    {
      number: "02",
      title: "Multiple roles open together",
      text: "Support your internal team when vacancies begin competing for time and attention.",
    },
    {
      number: "03",
      title: "A role is difficult to fill",
      text: "Use targeted sourcing and headhunting for positions that need a more focused search.",
    },
    {
      number: "04",
      title: "You need temporary support",
      text: "Increase support for a project, campaign or hiring peak, then reduce it when demand settles.",
    },
  ];

  return (
    <main className="w-full bg-white text-[#0b2a5b]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0b2a5b]">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(67,102,153,0.32) 1px, transparent 1px), linear-gradient(90deg, rgba(67,102,153,0.32) 1px, transparent 1px)",
            backgroundSize: "78px 78px",
          }}
        />

        <div className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full border border-[#5573a3]/25" />

        <div className="pointer-events-none absolute -right-28 bottom-[-150px] h-[420px] w-[420px] rounded-full border border-[#5573a3]/20" />

        <div className="relative z-10 mx-auto grid min-h-[72vh] w-full max-w-[1800px] items-center gap-16 px-10 py-24 lg:grid-cols-[0.82fr_1.18fr] lg:px-16 xl:px-24 2xl:px-32">
          <Reveal>
            <div>
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)] md:text-[24px]">
                Our Services
              </p>

              <h1 className="mt-5 max-w-[850px] font-serif text-[58px] font-bold leading-[0.98] tracking-[-0.035em] text-white md:text-[78px] lg:text-[92px]">
                Recruitment support from search to shortlist.
              </h1>

              <p className="mt-9 max-w-[760px] text-[26px] leading-[1.7] text-white/75 md:text-[29px]">
                We provide focused recruitment support designed to increase
                sourcing capacity, reduce hiring workload and help your team
                reach stronger candidates faster.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  "India & UAE",
                  "Direct Sourcing",
                  "Flexible Support",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-white px-5 py-3 font-serif text-[17px] font-bold text-[#0b2a5b] shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 shadow-[0_20px_55px_rgba(0,0,0,0.25)]">
              <Image
                src="/services-sourcing.png"
                alt="Recruitment sourcing and talent search"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1800px] px-10 py-28 lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="max-w-[980px]">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Core Recruitment Services
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-[#0b2a5b] md:text-[64px] xl:text-[76px]">
                The recruitment work that takes time off your team.
              </h2>

              <p className="mt-8 max-w-[830px] text-[25px] leading-[1.75] text-[#566176]">
                Our services are designed around the most time-consuming parts
                of recruitment, from identifying candidates to keeping the
                process organised.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-7 md:grid-cols-2">
            {coreServices.map((service) => (
              <Reveal key={service.number}>
                <div className="group h-full rounded-lg border border-[#0b2a5b]/10 bg-[#f9fafb] p-9 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_45px_rgba(11,42,91,0.09)] md:p-11">
                  <div className="flex items-start justify-between gap-6">
                    <span className="font-serif text-[17px] font-bold tracking-[0.16em] text-[var(--gold)]">
                      {service.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0b2a5b] text-[var(--gold)] transition-transform duration-300 group-hover:scale-105">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="mt-8 font-serif text-[36px] font-bold text-[#0b2a5b]">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-[670px] text-[23px] leading-[1.75] text-[#566176]">
                    {service.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIST SUPPORT */}
      <section className="w-full bg-[#0b2a5b] text-white">
        <div className="mx-auto grid w-full max-w-[1800px] items-center gap-20 px-10 py-28 lg:grid-cols-[0.72fr_1.28fr] lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden">
              <Image
                src="/services-specialist.png"
                alt="Specialist recruitment support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
            </div>
          </Reveal>

          <Reveal>
            <div className="max-w-[900px]">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Specialist Support
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-white md:text-[64px] xl:text-[72px]">
                Some roles require more than a job advertisement.
              </h2>

              <p className="mt-8 max-w-[780px] text-[25px] leading-[1.75] text-white/75">
                Difficult, niche and senior vacancies often need a more
                targeted approach. We combine direct sourcing, research and
                candidate outreach to build stronger talent pipelines.
              </p>

              <div className="mt-12 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                {specialistServices.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-white/10 pb-5"
                  >
                    <CheckIcon />

                    <span className="font-serif text-[20px] font-bold text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLEXIBLE RECRUITMENT CAPACITY */}
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#0b2a5b 1px, transparent 1px), linear-gradient(90deg, #0b2a5b 1px, transparent 1px)",
            backgroundSize: "110px 110px",
          }}
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1800px] gap-20 px-10 py-28 lg:grid-cols-[0.78fr_1.22fr] lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="lg:sticky lg:top-[180px] lg:self-start">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Flexible Recruitment Capacity
              </p>

              <h2 className="mt-5 max-w-[700px] font-serif text-[50px] font-bold leading-[1.05] tracking-[-0.025em] text-[#0b2a5b] md:text-[64px]">
                Recruitment capacity when you need it.
              </h2>

              <p className="mt-8 max-w-[650px] text-[25px] leading-[1.75] text-[#566176]">
                Hiring requirements are rarely constant. Our model gives your
                team additional recruitment support at the points where extra
                capacity creates the most value.
              </p>

              <div className="mt-10 h-[3px] w-24 bg-[var(--gold)]" />
            </div>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-[var(--gold)]/30 md:block" />

            <div className="space-y-7">
              {flexibleItems.map((item) => (
                <Reveal key={item.number}>
                  <div className="relative grid gap-6 border-b border-[#0b2a5b]/10 pb-8 md:grid-cols-[56px_1fr]">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0b2a5b] font-serif text-[17px] font-bold text-[var(--gold)]">
                      {item.number}
                    </div>

                    <div className="pt-1">
                      <h3 className="font-serif text-[32px] font-bold text-[#0b2a5b]">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-[760px] text-[23px] leading-[1.75] text-[#566176]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT RECRUITMENT */}
      <section className="w-full bg-white">
        <div className="mx-auto grid w-full max-w-[1800px] items-center gap-16 px-10 py-28 lg:grid-cols-[1fr_1fr] lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div>
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                Project Recruitment
              </p>

              <h2 className="mt-5 max-w-[820px] font-serif text-[50px] font-bold leading-[1.05] text-[#0b2a5b] md:text-[64px]">
                Larger hiring requirements need structured execution.
              </h2>

              <p className="mt-8 max-w-[720px] text-[25px] leading-[1.75] text-[#566176]">
                When multiple roles need to move together, we provide a
                coordinated recruitment workflow that keeps sourcing,
                screening, candidate communication and progress organised.
              </p>

              <div className="mt-10 grid gap-5">
                {[
                  "Multiple positions managed together",
                  "Consistent candidate screening",
                  "Coordinated communication and follow-up",
                  "Clearer progress across the hiring project",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckIcon />

                    <span className="font-serif text-[20px] font-bold text-[#0b2a5b]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-[0_20px_55px_rgba(11,42,91,0.12)]">
              <Image
                src="/services-projects.png"
                alt="Project recruitment and hiring support"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONNECTED PROCESS */}
      <section className="w-full bg-[#f7f8fa]">
        <div className="mx-auto w-full max-w-[1800px] px-10 py-28 lg:px-16 xl:px-24 2xl:px-32 2xl:py-36">
          <Reveal>
            <div className="mx-auto max-w-[1050px] text-center">
              <p className="font-serif text-[22px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                One Connected Process
              </p>

              <h2 className="mt-5 font-serif text-[50px] font-bold leading-[1.05] text-[#0b2a5b] md:text-[64px] xl:text-[72px]">
                Use one service or combine them around your hiring needs.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {[
              {
                number: "01",
                title: "Find",
                text: "Sourcing, headhunting, talent mapping and candidate identification.",
              },
              {
                number: "02",
                title: "Qualify",
                text: "Screening, shortlist development and initial candidate assessment.",
              },
              {
                number: "03",
                title: "Coordinate",
                text: "Follow-ups, scheduling, communication and interview coordination.",
              },
            ].map((item) => (
              <Reveal key={item.number}>
                <div className="h-full rounded-lg border border-[#0b2a5b]/10 bg-white p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gold)] font-serif text-[18px] font-bold text-[var(--navy)]">
                    {item.number}
                  </div>

                  <h3 className="mt-7 font-serif text-[36px] font-bold text-[#0b2a5b]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[23px] leading-[1.75] text-[#566176]">
                    {item.text}
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
            <div className="relative overflow-hidden rounded-lg bg-[#0b2a5b] px-10 py-16 text-center md:px-16 md:py-20">
              <div className="pointer-events-none absolute -right-24 -top-28 h-[360px] w-[360px] rounded-full border border-white/10" />

              <div className="pointer-events-none absolute -bottom-44 -left-28 h-[450px] w-[450px] rounded-full border border-[var(--gold)]/15" />

              <div className="relative z-10">
                <p className="font-serif text-[20px] font-semibold uppercase tracking-[0.25em] text-[var(--gold)]">
                  Discuss Your Hiring Needs
                </p>

                <h2 className="mx-auto mt-5 max-w-[950px] font-serif text-[46px] font-bold leading-[1.08] text-white md:text-[60px] xl:text-[70px]">
                  Need additional recruitment capacity?
                </h2>

                <p className="mx-auto mt-7 max-w-[720px] text-[24px] leading-[1.7] text-white/70 md:text-[26px]">
                  Tell us what you&apos;re hiring for and we can discuss the
                  level of support that makes sense for your team.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    href={siteData.contact.phoneLink}
                    className="rounded-lg bg-[var(--gold)] px-10 py-4 font-serif text-[21px] font-bold !text-[var(--navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--gold)] hover:!text-[var(--navy)]"
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