export default function SpecialText({ text }: { text: string }) {
  return (
    <span className="font-reader font-medium text-secondary-foreground">
      {text}
    </span>
  );
}
