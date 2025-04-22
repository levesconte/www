export default function SpecialText({ text }: { text: string }) {
  return (
    <span className="font-reader text-light-special-foreground dark:text-dark-special-foreground font-medium">
      {text}
    </span>
  );
}
