export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="animate-slide-up-and-fade-1 flex flex-col justify-center">
        {/* Name */}
        <h1 className="text-[15px] font-medium">Tomas Le Vesconte</h1>

        {/* Status */}
        <div className="flex items-center">
          <div className="absolute flex size-4">
            <span className="absolute top-[4.5px] size-2 animate-ping rounded-full bg-red-500 opacity-75"></span>
            <span className="relative top-[4.5px] size-2 rounded-full bg-red-500"></span>
          </div>
          <span className="prose prose-neutral dark:prose-invert ml-4 text-[14px]">
            Unavailable
          </span>
        </div>
      </header>

      {/* About */}
      <section className="prose prose-zinc dark:prose-invert animate-slide-up-and-fade-2 mt-[1.5em] text-pretty text-[15px]">
        <p className="leading-relaxed">
          I'm a{" "}
          <span className="font-reader text-[16px] font-medium italic text-foreground">
            Software Developer
          </span>{" "}
          living in Sweden. If you'd like to get in touch, you can reach me at{" "}
          <span className="font-reader text-[16px] font-medium italic text-foreground">
            tlevesconte [at] proton [dot] me
          </span>{" "}
          . You can also find me on{" "}
          <a
            href="https://github.com/tlevesconte"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://linkedin.com/in/tomas-levesconte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>

        {/* Location */}
        <p className="prose-neutral dark:prose-invert text-[14px]">
          Wales
          <span className="font-noto"> →</span>
          <span className="font-medium"> Sweden</span>
        </p>

        {/* Break */}
        <hr className="mb-[1.2em] mt-[1.2em]" />
      </section>

      {/* Projects */}
      <section className="animate-slide-up-and-fade-3">
        <ul>
          <li className="prose prose-zinc dark:prose-invert text-pretty text-[15px]">
            <a
              href="https://danwallacedrummer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              dwd
            </a>
            <span> — a personal website.</span>
          </li>
        </ul>
      </section>
    </>
  );
}
