export default function SpecialText({ text }: { text: string }) {
  return (
    <span className="font-reader font-medium text-primary-foreground">
      {text}
    </span>
  );
}
