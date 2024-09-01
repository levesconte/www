import Hyperlink from "@/components/hyperlink";
import SpecialText from "@/components/special-text";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="animate-slide-down-and-fade-1 flex flex-col justify-center">
        {/* Name */}
        <h1 className="text-[15px] font-medium">Tomas Le Vesconte</h1>

        {/* Status */}
        <div className="flex items-center">
          <div className="absolute flex size-4">
            <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative top-[4.5px] size-2 rounded-full bg-red-500"></span>
          </div>
          <span className="prose prose-neutral ml-4 text-[14px] dark:prose-invert">
            Unavailable
          </span>
        </div>

        {/* Break */}
        <hr className="mb-[1.2em] mt-[1.2em]" />
      </header>

      {/* About */}
      <section className="animate-slide-down-and-fade-2">
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
      <section className="animate-slide-down-and-fade-3">
        <ul>
          <li className="prose prose-zinc text-pretty text-[15px] dark:prose-invert">
            <Hyperlink href="https://danwallacedrummer.com" text="dwd" />
            <p> — a personal website.</p>
          </li>
        </ul>
      </section>
    </>
  );
}
