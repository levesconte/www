import ModeToggle from "@/src/components/theme-toggle";
import Hyperlink from "@/src/components/hyperlink";
import SpecialText from "@/src/components/special-text";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="animate-slide-down-and-fade-1 flex flex-col">
        <div className="flex flex-row items-center justify-between">
          <h1 className="pr-4 font-reader font-medium text-secondary-foreground">
            Tomas Le Vesconte
          </h1>
          <ModeToggle />
        </div>

        {/* Break */}
        <hr className="mb-[28px] mt-[8px] border-dotted border-secondary-foreground opacity-30" />
      </header>

      {/* About */}
      <section className="animate-slide-down-and-fade-2" aria-label="about me">
        {/* Title (for accessibility) */}
        <h2 className="sr-only">About</h2>

        {/* Description */}
        <div className="max-w-full text-secondary-foreground">
          <p className="mb-[22px] leading-relaxed">
            <SpecialText text="Hi!" /> My name is <SpecialText text="Tom" />,
            and I&#39;m a <SpecialText text="Software Developer" /> living in
            Sweden. If you&#39;d like to get in touch, you can reach me at{" "}
            <SpecialText text="tlevesconte [at] proton [dot] me" />. You can
            also find me on{" "}
            <Hyperlink text="GitHub" href="https://github.com/levesconte" />.{" "}
            {/* and <Hyperlink text="𝕏" href="https://x.com/levescontet" />. */}
          </p>

          {/* Location */}
          <p>
            Wales
            <span className="font-noto"> → </span>
            <SpecialText text="Sweden" />
          </p>
        </div>
      </section>
    </>
  );
}
