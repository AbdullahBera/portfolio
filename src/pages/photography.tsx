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
  const [belgiumAlbum, dusseldorfAlbum, san_diegoAlbum, munichAlbum, istanbulAlbum] =
    await Promise.all([
      readdirSync("public/photos/ghent"),
      readdirSync("public/photos/dusseldorf"),
      readdirSync("public/photos/san_diego"),
      readdirSync("public/photos/munich"),
      readdirSync("public/photos/istanbul")
    ]);

  return {
    props: {
      albums: [
        {
          title: "Graffiti Alley",
          path: "/photos/ghent",
          files: belgiumAlbum,
          location: "Ghent, Belgium",
        },
        {
          title: "III. Terwestenweg",
          path: "/photos/dusseldorf",
          files: dusseldorfAlbum,
          location: "Essen, Germany",
        },
        {
          title: "Stan's Beach",
          path: "/photos/san_diego",
          files: san_diegoAlbum,
          location: "San Diego, CA",
        },
        {
          title: "Galata Bridge",
          path: "/photos/istanbul",
          files: istanbulAlbum,
          location: "Istanbul, Turkey",
        },
        {
          title: "English Garden",
          path: "/photos/munich",
          files: munichAlbum,
          location: "Munich, Germany",
        },
      ],
    },
    revalidate: 60 * 60 * 24 * 15, // 15 days
  };
}
