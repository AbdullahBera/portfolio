import Image from "next/image";
import Navigation from "@/components/Navigation";
import { readdirSync } from "fs";

export default function Photography({
  albums,
}: {
  albums: {
    title: string;
    path: string;
    files: string[];
    location: string;
  }[];
}) {
  return (
    <main className="bg-white text-black min-h-screen lg:p-24 selection:text-pink-600">
      <Navigation />

      <section className={"max-w-3xl px-5 py-8 mx-auto"}>
        <div className="flex flex-col items-center space-y-12">
          {albums.map((album, index) => (
            <AlbumCard album={album} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

function AlbumCard({
  album,
}: {
  album: {
    title: string;
    path: string;
    files: string[];
    location: string;
  };
}) {
  return (
    <div className="">
      <h2 className="text-gray-700">{album.title}</h2>
      <p className="text-gray-700 text-xs font-extralight pb-2">
        {album.location}
      </p>
      {album.files.map((file, index) => (
        <Image
          className="pt-2"
          key={index}
          src={`${album.path}/${file}`}
          width={450}
          height={450}
          alt=""
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const [uskudarAlbum, cucamongaAlbum, veniceAlbum, uscAlbum] =
    await Promise.all([
      readdirSync("public/photos/uskudar"),
      readdirSync("public/photos/cucamonga"),
      readdirSync("public/photos/venice"),
      readdirSync("public/photos/usc"),
    ]);

  return {
    props: {
      albums: [
        {
          title: "A Window from Uskudar to Sultanahmet",
          path: "/photos/uskudar",
          files: uskudarAlbum,
          location: "Istanbul, Turkey",
        },
        {
          title: "The Ivy from the Magic Beans",
          path: "/photos/cucamonga",
          files: cucamongaAlbum,
          location: "Rancho Cucamonga, CA",
        },
        {
          title: "LA in Golden Hour",
          path: "/photos/venice",
          files: veniceAlbum,
          location: "Venice, CA",
        },
        {
          title: "A USC Sunrise Before COVID",
          path: "/photos/usc",
          files: uscAlbum,
          location: "Los Angeles, CA",
        },
      ],
    },
    revalidate: 60 * 60 * 24 * 15, // 15 days
  };
}
