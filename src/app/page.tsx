import ModeToggle from "@/src/components/theme-toggle";
import Hyperlink from "@/src/components/ui/hyperlink";
import SpecialText from "@/src/components/ui/special-text";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="animate-slide-down-and-fade-1 flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <h1 className="pr-4 text-[15px] font-medium">Tomas Le Vesconte</h1>
          <ModeToggle />
        </div>

        {/* Break */}
        <hr className="mb-[1.2em] mt-[1.2em]" />
      </header>

      {/* About */}
      <section className="animate-slide-down-and-fade-2" aria-label="about me">
        {/* Title (for accessibility) */}
        <h2 className="sr-only">About</h2>

        {/* Description */}
        <div className="prose prose-zinc text-pretty text-[15px] dark:prose-invert">
          <p className="leading-relaxed">
            <SpecialText text="Hi!" /> My name is <SpecialText text="Tom" />,
            and I&#39;m a <SpecialText text="Software Developer" /> living in
            Sweden. If you&#39;d like to get in touch, you can reach me at{" "}
            <SpecialText text="tlevesconte [at] proton [dot] me" />. You can
            also find me on{" "}
            <Hyperlink text="GitHub" href="https://github.com/tlevesconte" />.
          </p>

          {/* Location */}
          <p className="prose-neutral text-[14px] dark:prose-invert">
            Wales
            <span className="font-noto"> →</span>
            <strong> Sweden</strong>
          </p>
        </div>
      </section>
    </>
  );
}
