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
      <section className={"max-w-3xl px-5 mx-auto"}>
        <ul className="py-4 text-base tracking-normal text-gray-600 font-light space-y-6">
          <ProjectCardListItem
            title="Cardiovascular Disease (work in progress)"
            description="An exploratory analysis of people with cardiovascular disease."
            codeRepo="https://github.com/AbdullahBera/heart-attack-analysis?tab=readme-ov-file"
          />
          <ProjectCardListItem
            title="Magic Recipe Generator (work in progress)"
            description="A magic recipe generator based on the Harry Potter Series."
            codeRepo="https://github.com/AbdullahBera/ai-magic-recipe-generator"
          />
          <ProjectCardListItem
            title="Disaster Tweet"
            description="A machine learning model that helps classify Tweets that mean a disaster and those that don&apos;t."
            codeRepo="https://github.com/AbdullahBera/disaster-tweets"
          />
          <ProjectCardListItem
            title="Credit Risk"
            description="Tested several machine learning models to predict the credit risk of people seeking loans."
            codeRepo="https://github.com/AbdullahBera/Credit_Risk_Analysis"
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
      <a
        href={codeRepo}
        rel="noreferrer"
        target="_blank"
        className="block hover:cursor-pointer p-2.5 rounded-md hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-x-3">
          <h3 className="font-normal group-hover:text-pink-600 transition-colors">{title}</h3>
          <GitHubLogoIcon className="w-4 h-4 group-hover:text-pink-600 transition-colors" />
        </div>
        <p className="font-extralight">{description}</p>
      </a>
    </li>
  );
}
