import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="selection:text-pink-600 bg-white text-black min-h-screen lg:p-24 bg-transparent">
      <Navigation />
      <section className={"max-w-3xl px-5 py-8 mx-auto"}>
        <h1 className="text-3xl font-medium mb-8 pl-2.5">hey, I&apos;m abdullah bera 👋</h1>
        <p className="text-lg tracking-normal text-gray-600 font-light animate-in pl-2.5">
          I am currently exploring various RAG models and AI agents.
        </p>
        <p className="pt-8 text-lg tracking-normal text-gray-600 font-extralight leading-loose pl-2.5">
          My interests span across{" "}
          <span className="font-light">
            machine learning, LLMs, and causal inference
          </span>
          . I am doing my master&apos;s of data science at the University of
          San Francisco. Currently, working as a data scientist at{" "}
          <a
            className="font-light"
            target="_blank"
            href="https://www.mileiq.com"
            rel="noreferrer"
          >
            MileIQ
          </a>
          . Previosuly, I worked as a data scientist at{" "}
          <a
            className="font-light"
            target="_blank"
            href="https://www.spacture.ai"
            rel="noreferrer"
          >
            Spacture AI
          </a>
          , data analyst{" "}
          <a
            className="font-light"
            target="_blank"
            href="https://www.reqora.com/"
            rel="noreferrer"
          >
            Reqora
          </a>{" "}
          , operations analyst{" "}
          <a
            className="font-light"
            href="https://www.instagram.com/tryfeedapp/?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Feed
          </a>
          , and more.
        </p>
      </section>

      <Contact />
    </main>
  );
}
