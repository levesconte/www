export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center text-[1.1em] text-white">
          <h1 className="mb-[.3em] text-[1.3em] font-bold leading-[normal]">
            {`Hi, I'm Tomas.`}
          </h1>

          <p className="mb-[.3em] text-white/70">
            {`I'm an aspiring Software Engineer living in Sweden. If
            you'd like to get in touch, you can reach me at `}
            <span className="font-semibold text-white">tlevesconte [at] proton [dot] me</span>
            {`. You can also find me on `}
            <a
              className="border-b border-dotted border-white font-semibold text-white"
              href="https://github.com/tlevesconte"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {` and `}
            <a
              className="border-b border-dotted border-white font-semibold text-white"
              href="https://www.linkedin.com/in/tomas-levesconte/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </p>

          <p className="text-white/70">
            Wales → <b className="text-white">Sweden</b>
          </p>
      </header>

      <hr className="mb-[1.2em] mt-[1.2em]"></hr>

      <main>
        <p className="text-[1.1em] text-white/70">
          <a
            className="border-b border-dotted border-green-400 font-semibold text-green-400"
            href="https://danwallacedrummer.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dwd
          </a>
          {` — a personal website I built for a client.`}
          <br />
        </p>
      </main>
    </>
  );
}
