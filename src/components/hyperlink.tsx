export default function Hyperlink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <a
      className="font-reader text-[16px] font-medium text-primary-foreground no-underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={` ${text} (opens in a new tab)`}
    >
      {text}
    </a>
  );
}
