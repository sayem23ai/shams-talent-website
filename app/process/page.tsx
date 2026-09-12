import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function ProcessPage() {
  const garamondStyle = {
    fontFamily: "Garamond, Georgia, serif",
  };

  const processSteps = [
    {
      number: "01",
      title: "Understand Your Needs",
      description:
        "We begin by understanding your business, team structure, role requirements and the kind of people who will thrive within your organisation.",
    },
    {
      number: "02",
      title: "Source & Identify Talent",
      description:
        "Our search is focused and deliberate. We identify relevant candidates through targeted sourcing, networks and carefully selected talent pools.",
    },
    {
      number: "03",
      title: "Screen & Assess",
      description:
        "Candidates are reviewed against the role, experience, capabilities and expectations before they reach your team.",
    },
    {
      number: "04",
      title: "Present the Right Candidates",
      description:
        "Instead of overwhelming you with profiles, we present a focused shortlist of candidates who genuinely align with your requirements.",
    },
    {
      number: "05",
      title: "Support Through Placement",
      description:
        "From interviews and feedback to offers and joining, we stay involved throughout the process to help create a smooth hiring experience.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Focused Search",
      description:
        "Every search starts with your actual requirements, helping us focus our effort where it matters.",
    },
    {
      number: "02",
      title: "Quality Screening",
      description:
        "Profiles are carefully reviewed before being presented, saving your team valuable time.",
    },
    {
      number: "03",
      title: "Clear Communication",
      description:
        "You stay informed throughout the search with practical, transparent communication.",
    },
    {
      number: "04",
      title: "Flexible Support",
      description:
        "Our approach adapts to the role, urgency and level of support your organisation needs.",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-white text-[#0b2a5b]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="w-full bg-[#0b2a5b]">
        <div className="grid min-h-[480px] lg:grid-cols-[0.92fr_1.08fr]">
          {/* LEFT */}
          <div className="flex items-center px-8 py-16 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
            <Reveal>
              <div className="max-w-2xl">
                <p
                  className="mb-6 text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                  style={garamondStyle}
                >
                  Our Process
                </p>

                <h1
                  className="text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl lg:text-7xl"
                  style={garamondStyle}
                >
                  A Clear Path
                  <br />
                  to the{" "}
                  <span className="text-[var(--gold)]">
                    Right Talent.
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-[22px] leading-8 text-white/80">
                  Recruitment works best when the process is clear, focused
                  and built around what your business actually needs.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="bg-[var(--gold)] px-7 py-4 text-base font-bold text-[var(--navy)] transition duration-300 hover:bg-[var(--gold)]"
                    style={garamondStyle}
                  >
                    Start a Conversation
                  </Link>

                  <a
                    href="#our-process"
                    className="bg-[var(--gold)] px-7 py-4 text-base font-bold text-[var(--navy)] transition duration-300 hover:bg-[var(--gold)]"
                    style={garamondStyle}
                  >
                    Explore Our Process
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative min-h-[480px] overflow-hidden">
            <Image
              src="/process-hero.png"
              alt="Shams Talent Solutions recruitment process"
              fill
              priority
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="w-full bg-[#f8f9fb]">
        <div className="w-full px-8 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                  style={garamondStyle}
                >
                  How We Work
                </p>

                <h2
                  className="mt-5 text-4xl font-bold leading-tight text-[#0b2a5b] md:text-5xl lg:text-6xl"
                  style={garamondStyle}
                >
                  Thoughtful from
                  <br />
                  start to finish.
                </h2>
              </div>

              <div className="flex items-center">
                <div>
                  <p className="max-w-3xl text-[24px] leading-9 text-[#0b2a5b]/75 md:text-2xl md:leading-10">
                    We believe finding the right person should never feel like
                    sending as many CVs as possible and hoping one works.
                  </p>

                  <p className="mt-6 max-w-3xl text-[22px] leading-8 text-[#0b2a5b]/80">
                    Our process is designed to bring structure to recruitment:
                    understand the requirement, focus the search, assess
                    carefully and stay involved until the right person joins
                    your team.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================
          FIVE STEP PROCESS
      ========================================================== */}
      <section id="our-process" className="w-full bg-white">
        <div className="w-full px-8 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="max-w-4xl">
              <p
                className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                style={garamondStyle}
              >
                The Shams Process
              </p>

              <h2
                className="mt-5 text-4xl font-bold leading-tight text-[#0b2a5b] md:text-5xl lg:text-6xl"
                style={garamondStyle}
              >
                From requirement to placement.
              </h2>

              <p className="mt-6 max-w-2xl text-[22px] leading-8 text-[#0b2a5b]/80">
                A straightforward recruitment journey built around relevance,
                quality and communication.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 border-t border-[#0b2a5b]/15">
            {processSteps.map((step) => (
              <Reveal key={step.number}>
                <div className="group grid gap-6 border-b border-[#0b2a5b]/15 py-10 transition duration-300 md:grid-cols-[120px_0.8fr_1.2fr] md:items-start md:gap-10 lg:py-12">
                  <div
                    className="text-3xl font-bold text-[var(--gold)]"
                    style={garamondStyle}
                  >
                    {step.number}
                  </div>

                  <h3
                    className="text-2xl font-bold leading-tight text-[#0b2a5b] transition duration-300 group-hover:text-[var(--gold)] md:text-3xl"
                    style={garamondStyle}
                  >
                    {step.title}
                  </h3>

                  <p className="max-w-2xl text-[19px] leading-8 text-[#0b2a5b]/80 md:text-[22px]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP ONE & TWO
      ========================================================== */}
      <section className="w-full bg-[#0b2a5b]">
        <div className="grid lg:grid-cols-2">
          <div className="flex items-center px-8 py-20 md:px-12 lg:px-16 lg:py-24 xl:px-24 2xl:px-32">
            <Reveal>
              <div className="max-w-xl">
                <p
                  className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                  style={garamondStyle}
                >
                  Step One & Two
                </p>

                <h2
                  className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                  style={garamondStyle}
                >
                  Understand first.
                  <br />
                  Search second.
                </h2>

                <p className="mt-7 text-[22px] leading-8 text-white/70">
                  Before looking for candidates, we take the time to understand
                  what the role actually requires.
                </p>

                <div className="mt-10 space-y-7">
                  <div className="border-l-2 border-[var(--gold)] pl-6">
                    <h3
                      className="text-xl font-bold text-white"
                      style={garamondStyle}
                    >
                      Role & Business Understanding
                    </h3>

                    <p className="mt-2 leading-7 text-white/80">
                      Responsibilities, experience, team environment,
                      expectations and priorities are clarified before the
                      search begins.
                    </p>
                  </div>

                  <div className="border-l-2 border-[var(--gold)] pl-6">
                    <h3
                      className="text-xl font-bold text-white"
                      style={garamondStyle}
                    >
                      Targeted Talent Search
                    </h3>

                    <p className="mt-2 leading-7 text-white/80">
                      We then focus on relevant talent instead of relying on a
                      broad, volume-driven approach.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:min-h-[700px]">
            <Image
              src="/process-screening.png"
              alt="Candidate screening and recruitment assessment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP THREE
      ========================================================== */}
      <section className="w-full bg-[#f8f9fb]">
        <div className="w-full px-8 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-24 2xl:px-32">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal>
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/process-screening.png"
                  alt="Shams Talent Solutions screening candidates"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Reveal>

            <Reveal>
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                  style={garamondStyle}
                >
                  Step Three
                </p>

                <h2
                  className="mt-5 text-4xl font-bold leading-tight text-[#0b2a5b] md:text-5xl lg:text-6xl"
                  style={garamondStyle}
                >
                  Screening with
                  <br />
                  purpose.
                </h2>

                <p className="mt-7 max-w-xl text-[22px] leading-8 text-[#0b2a5b]/80">
                  A CV can tell part of the story. Our screening process is
                  designed to understand whether the candidate makes sense for
                  the opportunity before introducing them to you.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {[
                    "Relevant Experience",
                    "Role Alignment",
                    "Candidate Motivation",
                    "Practical Fit",
                  ].map((item) => (
                    <div
                      key={item}
                      className="border border-[#0b2a5b]/12 bg-white px-5 py-5"
                    >
                      <span
                        className="text-lg font-bold text-[#0b2a5b]"
                        style={garamondStyle}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP FOUR
      ========================================================== */}
      <section className="w-full bg-white">
        <div className="w-full px-8 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="mx-auto max-w-5xl text-center">
              <p
                className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                style={garamondStyle}
              >
                Step Four
              </p>

              <h2
                className="mt-5 text-4xl font-bold leading-tight text-[#0b2a5b] md:text-5xl lg:text-6xl"
                style={garamondStyle}
              >
                Fewer profiles.
                <br />
                Better conversations.
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-[22px] leading-8 text-[#0b2a5b]/80">
                Our aim is not to fill your inbox. We focus on presenting
                candidates worth your time, supported by clear context around
                their experience and suitability.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-6xl gap-px bg-[#0b2a5b]/10 md:grid-cols-3">
            {[
              {
                title: "Relevant",
                text: "Candidates are matched against the actual requirements of the role.",
              },
              {
                title: "Considered",
                text: "Profiles are reviewed before they are introduced to your organisation.",
              },
              {
                title: "Clear",
                text: "You receive useful candidate context to support quicker decisions.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <div className="h-full bg-[#f8f9fb] p-8 md:p-10">
                  <div
                    className="text-5xl font-bold text-[var(--gold)]/30"
                    style={garamondStyle}
                  >
                    +
                  </div>

                  <h3
                    className="mt-8 text-3xl font-bold text-[#0b2a5b]"
                    style={garamondStyle}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#0b2a5b]/80">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STEP FIVE
      ========================================================== */}
      <section className="w-full bg-[#f8f9fb]">
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[3/2] w-full lg:aspect-auto lg:min-h-[700px]">
            <Image
              src="/process-placement.png"
              alt="Successful candidate placement and hiring partnership"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="flex items-center px-8 py-20 md:px-12 lg:px-16 lg:py-24 xl:px-24 2xl:px-32">
            <Reveal>
              <div className="max-w-xl">
                <p
                  className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                  style={garamondStyle}
                >
                  Step Five
                </p>

                <h2
                  className="mt-5 text-4xl font-bold leading-tight text-[#0b2a5b] md:text-5xl lg:text-6xl"
                  style={garamondStyle}
                >
                  Support that continues
                  <br />
                  through placement.
                </h2>

                <p className="mt-7 text-[22px] leading-8 text-[#0b2a5b]/80">
                  Identifying the candidate is only part of the process. We
                  continue supporting both sides as the opportunity moves
                  forward.
                </p>

                <div className="mt-10 space-y-5">
                  {[
                    "Interview coordination",
                    "Candidate and client feedback",
                    "Offer-stage communication",
                    "Joining and placement support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-5 border-b border-[#0b2a5b]/12 pb-5"
                    >
                      <span
                        className="text-xl font-bold text-[var(--gold)]"
                        style={garamondStyle}
                      >
                        —
                      </span>

                      <span
                        className="text-lg font-bold text-[#0b2a5b]"
                        style={garamondStyle}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY IT WORKS
      ========================================================== */}
      <section className="w-full bg-white">
        <div className="w-full px-8 py-24 md:px-12 lg:px-16 lg:py-28 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p
                  className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                  style={garamondStyle}
                >
                  Why It Works
                </p>

                <h2
                  className="mt-5 text-4xl font-bold leading-tight text-[#0b2a5b] md:text-5xl lg:text-6xl"
                  style={garamondStyle}
                >
                  Simple where it
                  <br />
                  should be.
                </h2>
              </div>

              <p className="max-w-2xl text-[22px] leading-8 text-[#0b2a5b]/80 lg:pt-12">
                Good recruitment does not need unnecessary complexity. It needs
                clear requirements, focused execution and consistent
                communication.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-l border-t border-[#0b2a5b]/12 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <Reveal key={benefit.number}>
                <div className="h-full min-h-[310px] border-b border-r border-[#0b2a5b]/12 p-8 lg:p-9">
                  <span
                    className="text-lg font-bold text-[var(--gold)]"
                    style={garamondStyle}
                  >
                    {benefit.number}
                  </span>

                  <h3
                    className="mt-16 text-2xl font-bold text-[#0b2a5b]"
                    style={garamondStyle}
                  >
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#0b2a5b]/80">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="w-full bg-[#0b2a5b]">
        <div className="w-full px-8 py-24 text-center md:px-12 lg:px-16 lg:py-28 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="mx-auto max-w-4xl">
              <p
                className="text-sm font-bold uppercase tracking-[0.28em] text-[var(--gold)] md:text-base"
                style={garamondStyle}
              >
                Start Your Search
              </p>

              <h2
                className="mt-5 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl"
                style={garamondStyle}
              >
                Ready to find the
                <br />
                right people?
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-[22px] leading-8 text-white/80">
                Tell us what your team needs and we’ll help you take the next
                step with a focused, practical recruitment approach.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-block bg-[var(--gold)] px-8 py-4 text-lg font-bold text-[var(--navy)] transition duration-300 hover:bg-[var(--gold)]"
                style={garamondStyle}
              >
                Talk to Shams
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}