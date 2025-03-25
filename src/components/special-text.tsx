export default function SpecialText({ text }: { text: string }) {
  return (
    <span className="font-reader text-[16px] font-medium text-primary-foreground">
      {text}
    </span>
  );
}
