import { MDXRemote } from "next-mdx-remote";

import Head from "next/head";
import {
  generateNamesForWritingRoutes,
  templateWritingByFilename,
} from "@/lib/docs";
import Navigation from "@/components/Navigation";

const PostPage = ({
  metadata,
  content,
}: {
  metadata: { title: string; description: string; date: string };
  content: any;
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metadata.description}></meta>
        <meta
          property="og:description"
          content={metadata.description}
          key="ogdesc"
        />
      </Head>
      <main className="selection:text-pink-600 bg-white text-black min-h-screen lg:p-24">
        <Navigation />
        <section className={"max-w-3xl px-5 py-8 mx-auto"}>
          <article
            className={
              "prose prose-invert leading-9 text-neutral-700 prose-headings:text-black prose-a:text-neutral-600 prose-h2:text-gray-800 sm:prose-h2:pt-6 prose-h1:text-black prose-h3:text-neutral-900 prose-h4:text-black prose-h5:text-black prose-h6:text-black text-justify prose-*:text-black ul:text-black ol:text-black li:text-black"
            }
          >
            <MDXRemote {...content} />
          </article>
        </section>
      </main>
    </>
  );
};

const getStaticPaths = async () => {
  const paths = await generateNamesForWritingRoutes();

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const postdata = await templateWritingByFilename("writings", slug);
  return { props: postdata };
};

export { getStaticProps, getStaticPaths };
export default PostPage;
