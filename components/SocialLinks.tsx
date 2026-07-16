const ICONS = {
  Facebook: (
    <>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </>
  ),
  Instagram: (
    <path d="M2.99 16.34a2 2 0 0 1 .1 1.17l-1.07 3.29a1 1 0 0 0 1.24 1.17l3.41-1a2 2 0 0 1 1.1.09 10 10 0 1 0-4.78-4.72" />
  ),
  YouTube: (
    <>
      <path d="M9 9a1 1 0 0 1 1.52-.86l4.99 3a1 1 0 0 1 0 1.72l-4.99 3A1 1 0 0 1 9 15z" />
      <circle cx="12" cy="12" r="10" />
    </>
  ),
  X: (
    <>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </>
  ),
} as const;

export type SocialName = keyof typeof ICONS;

/** Social row in the footer. Hrefs are placeholders in the source site. */
export function SocialLinks({
  networks = ["Facebook", "Instagram", "YouTube"],
}: {
  networks?: readonly SocialName[];
}) {
  return (
    <div className="socials">
      {networks.map((name) => (
        <a key={name} href="#" aria-label={name}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {ICONS[name]}
          </svg>
        </a>
      ))}
    </div>
  );
}
