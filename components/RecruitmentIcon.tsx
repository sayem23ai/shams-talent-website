export type RecruitmentIconName = "team" | "search" | "quality" | "time" | "capacity" | "check";

export default function RecruitmentIcon({ name = "check" }: { name?: RecruitmentIconName }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="recruitment-icon">
      {name === "team" && <><circle cx="9" cy="7" r="3" /><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4v3" /></>}
      {name === "search" && <><circle cx="10" cy="10" r="6.5" /><path d="m15 15 6 6M7 10h6M10 7v6" /></>}
      {name === "quality" && <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z" /><path d="m8 12 3 3 5-6" /></>}
      {name === "time" && <><circle cx="12" cy="12" r="9" /><path d="M12 6v6l4 2" /></>}
      {name === "capacity" && <><path d="M4 20V13h4v7M10 20V8h4v12M16 20V3h4v17M2 21h20" /></>}
      {name === "check" && <><circle cx="12" cy="12" r="9" /><path d="m7 12 3 3 7-7" /></>}
    </svg>
  );
}
