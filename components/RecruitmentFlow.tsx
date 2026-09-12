export default function RecruitmentFlow({ text }: { text: string }) {
  const steps = text.split(" → ");
  return (
    <p className="recruitment-flow">
      {steps.map((step, index) => <span className="flow-part" key={step}>
        <span className="flow-step">{step}</span>
        {index < steps.length - 1 && <span className="flow-arrow">{" → "}</span>}
      </span>)}
    </p>
  );
}
