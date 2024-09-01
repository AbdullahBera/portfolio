import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="selection:text-pink-600 bg-white text-black min-h-screen lg:p-24 bg-transparent">
      <Navigation />
      <section className={"max-w-3xl px-5 py-8 mx-auto"}>
        <p className="text-lg tracking-normal text-gray-600 font-light animate-in">
          I am currently exploring various RAG models.
        </p>
        <p className="pt-8 text-lg tracking-normal text-gray-600 font-extralight leading-loose">
          My interests span across{" "}
          <span className="font-light">
            machine learning, LLMs, and causal inference
          </span>
          . I am doing my master&apos;s of data science at the University of
          San Francisco. Previosuly, I worked as a product data analyst at{" "}
          <a
            className="font-light"
            href="https://www.spacture.ai"
            rel="noreferrer"
          >
            Spactur AI
          </a>
          , data analyst{" "}
          <a className="font-light" href="https://www.reqora.com/" rel="noreferrer">
            Reqora
          </a>{" "}
          , operations analyst{" "}
          <a className="font-light" href="https://www.instagram.com/tryfeedapp/?hl=en" rel="noreferrer">
            Feed
          </a>
          , and more.
        </p>
      </section>

      <Contact />
    </main>
  );
}
