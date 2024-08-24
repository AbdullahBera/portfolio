import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <section className={"max-w-3xl px-5 py-8 mx-auto"}>
      <nav className={cn("flex justify-between gap-x-4 items-end")}>
        <div className="flex gap-x-3 items-end">
          <Link href="/">
            <h1 className={cn("text-2xl font-bold text-gray-800")}>
              abdullah bera
            </h1>
          </Link>
          {pathname.length > 1 ? (
            <h3 className="hidden lg:inline-block select-none align-block font-medium text-lg text-gray-300">
              {pathname.split("/")[1]}
            </h3>
          ) : null}
        </div>

        <div className={cn("flex gap-x-2 md:gap-x-4 items-end")}>
          {["writing", "projects", "photography"].map((item, index) => (
            <Link
              key={index}
              href={{ pathname: `/${item}` }}
              className={cn(
                " rounded-sm text-gray-500 hover:bg-gray-100 py-1 px-2.5",
                pathname.includes(item) && "bg-gray-100"
              )}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
      {pathname === "/" ? (
        <h3 className="pt-3 lg:pt-6 font-extralight text-gray-600 text-sm">
          distsys and design lover
        </h3>
      ) : null}
    </section>
  );
}
