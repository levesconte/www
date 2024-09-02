import ModeToggle from "@/components/mode-toggle";
import Hyperlink from "@/components/hyperlink";
import SpecialText from "@/components/special-text";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="animate-slide-down-and-fade-1 flex flex-col justify-center">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col">
            {/* Name */}
            <h1 className="text-[15px] font-medium">Tomas Le Vesconte</h1>

            {/* Status */}
            <div className="flex items-center">
              <div className="absolute flex size-[18px]">
                <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-red-500 opacity-75"></span>
                <span className="relative top-[4.5px] size-2 rounded-full bg-red-500"></span>
              </div>
              <span className="prose prose-neutral ml-4 text-[14px] dark:prose-invert">
                Unavailable
              </span>
            </div>
          </div>

          <ModeToggle />
        </div>

        {/* Break */}
        <hr className="mb-[1.2em] mt-[1.2em]" />
      </header>

      {/* About */}
      <section className="animate-slide-down-and-fade-2" aria-label="about me">
        <h2 className="sr-only">About</h2>

        <div className="prose prose-zinc text-pretty text-[15px] dark:prose-invert">
          <p className="leading-relaxed">
            I'm a <SpecialText text="Software Developer" /> living in Sweden. If
            you'd like to get in touch, you can reach me at{" "}
            <SpecialText text="tlevesconte [at] proton [dot] me" />. You can
            also find me on{" "}
            <Hyperlink href="https://github.com/tlevesconte" text="GitHub" />{" "}
            and <Hyperlink href="https://x.com/t_levesconte" text="𝕏" />.
          </p>

          {/* Location */}
          <p className="prose-neutral text-[14px] dark:prose-invert">
            Wales
            <span className="font-noto"> →</span>
            <span className="font-medium"> Sweden</span>
          </p>
        </div>

        {/* Break */}
        <hr className="mb-[1.2em] mt-[1.2em]" />
      </section>

      {/* Projects */}
      <section
        className="animate-slide-down-and-fade-3"
        aria-label="my projects"
      >
        <h2 className="sr-only">Projects</h2>

        <ul>
          <li className="prose prose-zinc text-pretty text-[15px] dark:prose-invert">
            <Hyperlink href="https://danwallacedrummer.com" text="dwd" />
            <span> — a personal website.</span>
          </li>
        </ul>
      </section>
    </>
  );
}
