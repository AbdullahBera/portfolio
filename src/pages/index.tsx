import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="selection:text-pink-600 bg-white text-black min-h-screen lg:p-24 bg-transparent">
      <Navigation />
      <section className={"max-w-3xl px-5 py-8 mx-auto"}>
        <p className="text-lg tracking-normal text-gray-600 font-light animate-in">
          I am currently pursuing my Masters in Data Science.
        </p>
        <p className="pt-8 text-lg tracking-normal text-gray-600 font-extralight leading-loose">
          My interests span across{" "}
          <span className="font-light">
            distributed systems, LLMs, and cryptography
          </span>
          . I am doing my master&apos;s of computer science at the University of
          Southern California. Previosuly, I led technical at{" "}
          <a
            className="font-light"
            href="https://joinhaven.io"
            rel="noreferrer"
          >
            Haven
          </a>
          , was in zone infra at{" "}
          <a className="font-light" href="https://getir.com" rel="noreferrer">
            Getir
          </a>{" "}
          , founding team at{" "}
          <a className="font-light" href="https://ethsign.xyz" rel="noreferrer">
            EthSign
          </a>
          , and more.
        </p>
      </section>

      <Contact />
    </main>
  );
}
