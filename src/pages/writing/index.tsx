import Link from "next/link";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import { formatAndReturnWritings } from "@/lib/docs";

export default function WritingPage(
  {
    writings,
  }: {
    writings: {
      filename: string;
      metadata: {
        title: string;
        slug: string;
        description: string;
        date: string;
      };
    }[];
  } = { writings: [] }
) {
  return (
    <main className="selection:text-pink-600 bg-white text-black min-h-screen lg:p-24">
      <Navigation />
      <section className={"max-w-3xl mx-auto px-5 text-gray-600"}>
        <ul className="py-4 text-base tracking-normal space-y-2">
          {writings
            .sort((a, b) => {
              return (
                new Date(b.metadata.date).getTime() -
                new Date(a.metadata.date).getTime()
              );
            })
            .map((w, index) => (
              <li key={index}>
                <Link
                  href={`/writing/${w.metadata.slug}`}
                  className="block py-3 hover:bg-gray-50 rounded-sm font-light"
                >
                  <div className="flex justify-between pl-2.5 pr-4">
                    <h4 className="text-base">{w.metadata.title}</h4>
                    <p className="text-sm whitespace-nowrap">
                      {w.metadata.date}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </section>
      <Contact />
    </main>
  );
}

export const getStaticProps = async () => {
  const writings = await formatAndReturnWritings();

  return {
    props: {
      writings,
    },
  };
};
