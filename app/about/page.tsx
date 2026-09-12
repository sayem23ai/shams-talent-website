import Reveal from "@/components/Reveal";
import AboutContent from "@/components/AboutContent";
export default function AboutPage() {
  return <main className="about-page w-full bg-white text-[var(--navy)]">
      {/* HERO */}
      <section className="about-hero relative overflow-hidden bg-[#f7f8fa]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-[180px] -top-[220px] h-[620px] w-[620px] rounded-full border-2 border-[var(--gold)]/10" />
          <div className="absolute -right-[70px] -top-[110px] h-[420px] w-[420px] rounded-full border border-[#0b2a5b]/10" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(#0b2a5b 1px, transparent 1px), linear-gradient(90deg, #0b2a5b 1px, transparent 1px)",
              backgroundSize: "90px 90px",
            }}
          />

          <div aria-hidden="true" className="about-wordmark"><span>SHAMS</span><span>TALENT MANAGEMENT</span><span>SERVICES</span></div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-[1800px] items-center px-10 py-24 lg:px-16 xl:px-24 2xl:px-32">
          <Reveal>
            <div className="max-w-[1050px]">
              <p className="mb-6 font-serif text-[22px] font-semibold uppercase tracking-[0.28em] text-[var(--gold)] md:text-[24px]">
                About Shams
              </p>

              <h1 className="max-w-[1000px] font-serif text-[58px] font-bold leading-[0.98] tracking-[-0.035em] text-[#0b2a5b] md:text-[78px] lg:text-[96px] 2xl:text-[108px]">
                Recruitment support built around your business.
              </h1>

              <p className="mt-10 max-w-[850px] text-[26px] leading-[1.7] text-[#42526b] md:text-[30px]">
                Shams Talent Management Services works with organisations that
                need focused, dependable and flexible recruitment support
                across India and the UAE.
              </p>
            </div>
          </Reveal>
        </div>
      </section>


    <AboutContent />
  </main>;
}
