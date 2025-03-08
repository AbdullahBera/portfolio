import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  return (
    <section className={"max-w-3xl mx-auto"}>
      <div className="px-5 py-8">
        <nav>
          <div className={cn("flex gap-x-2 md:gap-x-4")}>
            <Link
              href="/"
              className={cn(
                "rounded-sm text-gray-500 hover:bg-gray-100 py-1 px-2.5",
                pathname === "/" && "bg-gray-100"
              )}
            >
              home
            </Link>
            {["writing", "projects", "photography"].map((item, index) => (
              <Link
                key={index}
                href={{ pathname: `/${item}` }}
                className={cn(
                  "rounded-sm text-gray-500 hover:bg-gray-100 py-1 px-2.5",
                  pathname.includes(item) && "bg-gray-100"
                )}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
        {pathname === "/" ? (
          <h3 className="pt-3 lg:pt-6 font-extralight text-gray-600 text-sm pl-2.5">
            step by step ferociously
          </h3>
        ) : null}
      </div>
    </section>
  );
}