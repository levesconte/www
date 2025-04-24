export default function Hyperlink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <a
      className="font-reader text-light-hyper-foreground dark:text-dark-hyper-foreground text-[16px] font-medium"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} (opens in a new tab)`}
    >
      {text}
    </a>
  );
}
