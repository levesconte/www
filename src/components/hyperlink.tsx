import { JSX } from "react";

export default function Hyperlink({
  href,
  element,
  text,
}: {
  href: string;
  element: JSX.Element;
  text: string;
}) {
  return (
    <a
      className="no-underline"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} (opens in a new tab)`}
    >
      {element}
    </a>
  );
}
