import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export async function formatAndReturnWritings() {
  const docs = await readWritingsDir();

  return Promise.all(
    docs.map(async (filename) => {
      const doc = await readWritingByFilename("writings", filename);
      const { data: metadata } = await extractWritingMetadata(doc);

      return {
        filename,
        metadata,
      };
    })
  );
}

export async function generateNamesForWritingRoutes() {
  const filenames = await readWritingsDir();
  return filenames.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
}

export async function templateWritingByFilename(
  dirname = "writings",
  slugname: string
) {
  const markdownWithMeta = fs.readFileSync(
    path.join(dirname, slugname + ".mdx"),
    "utf-8"
  );

  const { data: metadata, content } = matter(markdownWithMeta);
  const serializedContent = await serialize(content);

  return { metadata, content: serializedContent };
}

async function readWritingsDir() {
  return fs.readdirSync(path.join("writings"));
}

async function readWritingByFilename(dirname = "writings", filename: string) {
  return fs.readFileSync(path.join(dirname, filename), "utf-8");
}

async function extractWritingMetadata(doc: string) {
  //   const metadata = doc.match(/---(.|\n)*---/);
  return matter(doc);
}
