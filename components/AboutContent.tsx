import Image from "next/image";
import { aboutSections } from "@/data/about";
import Reveal from "@/components/Reveal";
import RecruitmentFlow from "@/components/RecruitmentFlow";
import RecruitmentIcon, { type RecruitmentIconName } from "@/components/RecruitmentIcon";

const icons: RecruitmentIconName[] = ["team", "time", "quality", "search", "quality", "search", "time", "capacity", "team"];
const features: { title: string; lines: string[] }[] = [];
for (const line of aboutSections[3].lines) {
  if (/^\d\. /.test(line)) features.push({ title: line, lines: [] });
  else features[features.length - 1].lines.push(line);
}

function Copy({ lines }: { lines: readonly string[] }) {
  return <div className="editorial-copy">{lines.map(line => line.includes(" → ")
    ? <RecruitmentFlow key={line} text={line} />
    : <p key={line}>{line}</p>)}</div>;
}

function Points({ lines }: { lines: readonly string[] }) {
  return <ul className="editorial-points">{lines.map((line, index) => <li key={line}>
    <span className="point-icon"><RecruitmentIcon name={icons[index % icons.length]} /></span>
    <span>{line}</span>
  </li>)}</ul>;
}

export default function AboutContent() {
  const [intro, problem, solution, difference, comparison, team, when, promise] = aboutSections;
  return <div className="about-content">
    <section className="editorial-section">
      <div className="editorial-shell editorial-split">
        <Reveal><div className="gold-rule" /><h2>{intro.title}</h2><Copy lines={intro.lines} /></Reveal>
        <Reveal delay={150}><Image src="/about-team.png" alt="Recruitment team working together around a meeting table" width={1536} height={1024} sizes="(max-width: 1023px) 100vw, 50vw" className="editorial-image" /></Reveal>
      </div>
    </section>

    <section className="editorial-section subtle-pattern bg-[#f7f8fa]">
      <div className="editorial-shell">
        <Reveal><div className="gold-rule" /><h2>{problem.title}</h2><Copy lines={problem.lines.slice(0, 2)} /></Reveal>
        <Reveal><Points lines={problem.lines.slice(2, 11)} /></Reveal>
        <Reveal><div className="problem-result"><p className="font-serif text-3xl font-bold">{problem.lines[11]}</p><div className="result-sequence">{problem.lines.slice(12, 15).map(line => <p key={line}>{line}</p>)}</div><p className="font-semibold">{problem.lines[15]}</p></div></Reveal>
      </div>
    </section>

    <section className="editorial-section editorial-navy subtle-pattern">
      <div className="editorial-shell">
        <Reveal><div className="gold-rule" /><h2>{solution.title}</h2><Copy lines={solution.lines.slice(0, 2)} /></Reveal>
        <Reveal delay={100}><div className="solution-flow"><Copy lines={solution.lines.slice(2)} /></div></Reveal>
      </div>
    </section>

    <section className="editorial-section">
      <div className="editorial-shell">
        <Reveal><div className="gold-rule" /><h2>{difference.title}</h2></Reveal>
        <div className="difference-grid">{features.map((feature, index) => <Reveal key={feature.title} delay={index % 2 * 100}>
          <article className="difference-feature">
            <span className="feature-icon"><RecruitmentIcon name={(["quality", "team", "capacity", "search", "time", "capacity"] as const)[index]} /></span>
            <h3>{feature.title}</h3>
            {index === 3 ? <><Copy lines={feature.lines.slice(0, 1)} /><Points lines={feature.lines.slice(1, 9)} /><Copy lines={feature.lines.slice(9)} /></> : <Copy lines={feature.lines} />}
          </article>
        </Reveal>)}</div>
      </div>
    </section>

    <section className="editorial-section bg-[#f7f8fa]">
      <div className="editorial-shell">
        <Reveal><div className="gold-rule" /><h2>{comparison.title}</h2></Reveal>
        <Reveal><div className="pain-comparison">
          <table><thead><tr><th scope="col">Employer Pain</th><th scope="col">Our Solution</th></tr></thead>
            <tbody>{comparison.lines.slice(1).map(line => {
              const [pain, answer] = line.split(" | ");
              return <tr key={pain}><th scope="row" data-label="Employer Pain">{pain}</th><td data-label="Our Solution"><span className="comparison-answer"><RecruitmentIcon />{answer}</span></td></tr>;
            })}</tbody>
          </table>
        </div></Reveal>
      </div>
    </section>

    <section className="editorial-section">
      <div className="editorial-shell editorial-split team-split">
        <Reveal><div className="gold-rule" /><h2>{team.title}</h2><Copy lines={team.lines} /></Reveal>
        <Reveal delay={150}><Image src="/about-partnership.png" alt="A team reviewing recruitment plans together" width={1024} height={1536} sizes="(max-width: 1023px) 100vw, 40vw" className="editorial-image partnership-image" /></Reveal>
      </div>
    </section>

    <section className="editorial-section bg-[#f7f8fa] subtle-pattern">
      <div className="editorial-shell">
        <Reveal><div className="gold-rule" /><h2>{when.title}</h2><Copy lines={when.lines.slice(0, 2)} /></Reveal>
        <Reveal><Points lines={when.lines.slice(2)} /></Reveal>
      </div>
    </section>

    <section className="editorial-section editorial-navy promise-section">
      <div className="editorial-shell">
        <Reveal><div className="gold-rule" /><h2>{promise.title}</h2><Copy lines={promise.lines.slice(0, 4)} /></Reveal>
        <Reveal><ul className="promise-actions">{promise.lines.slice(4, 9).map(line => <li key={line}><RecruitmentIcon />{line}</li>)}</ul></Reveal>
        <Reveal><Copy lines={promise.lines.slice(9, 12)} /><div className="promise-signoff"><Copy lines={promise.lines.slice(12)} /></div></Reveal>
      </div>
    </section>
  </div>;
}
