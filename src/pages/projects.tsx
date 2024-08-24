import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import {
  ArrowLeftIcon,
  GitHubLogoIcon,
  KeyboardIcon,
  UnderlineIcon,
} from "@radix-ui/react-icons";

export default function Projects() {
  return (
    <main className="selection:text-pink-600 bg-white text-black min-h-screen lg:p-24">
      <Navigation />
      <section className={"max-w-3xl px-5 py-8 mx-auto"}>
        <ul className="text-base tracking-normal text-gray-600 font-light space-y-6">
          <ProjectCardListItem
            title="Semanta"
            description="A template to create your semantic segmentation environment for smaller tasks."
            codeRepo="https://github.com/abdullahberan/semanta"
          />
          <ProjectCardListItem
            title="Ligthos"
            description="Node.js HTTP server built on Express for easy start to production."
            codeRepo="https://github.com/abdullahberan/lightos"
          />
          <ProjectCardListItem
            title="CLI Chat Server"
            description="A command-line application to chat with people you don't know for a few minutes."
            codeRepo="https://github.com/abdullahberan/cli-chat-server"
          />
          <ProjectCardListItem
            title="Redis Rate Limiter"
            description="An in-memory, sliding window log rate limtier."
            codeRepo="https://github.com/abdullahberan/node-redis-rate-limtier"
          />
        </ul>
      </section>

      <Contact />
    </main>
  );
}

function ProjectCardListItem({
  title,
  description,
  codeRepo,
}: {
  title: string;
  description: string;
  codeRepo: string;
}) {
  return (
    <li className="group">
      <div className="flex items-center gap-x-3">
        <h3 className="font-normal">{title}</h3>
        <a
          href={codeRepo}
          rel="noreferrer"
          target="_blank"
          className="group-hover:hover:text-pink-600 transition-colors hover:cursor-pointer"
        >
          <GitHubLogoIcon className="w-4 h-4" />
        </a>
      </div>
      <p className="font-extralight">{description}</p>
    </li>
  );
}
