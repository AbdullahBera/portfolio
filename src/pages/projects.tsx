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
            title="Cardiovascular Disease"
            description="A machine learning-powered Streamlit app that predicts cardiovascular disease risk."
            codeRepo="https://github.com/AbdullahBera/heart-attack-analysis?tab=readme-ov-file"
            demoLink="https://heart-attack-analysis-predict.streamlit.app/"
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
  demoLink,
}: {
  title: string;
  description: string;
  codeRepo: string;
  demoLink?: string;
}) {
  return (
    <li className="group">
      <div className="p-2.5 rounded-md hover:bg-gray-50 transition-colors">
        <div className="flex items-center gap-x-3">
          {demoLink ? (
            <a
              href={demoLink}
              rel="noreferrer"
              target="_blank"
              className="font-normal hover:text-pink-600 transition-colors hover:cursor-pointer"
            >
              {title}
            </a>
          ) : (
            <h3 className="font-normal">{title}</h3>
          )}
          <a
            href={codeRepo}
            rel="noreferrer"
            target="_blank"
            className="hover:cursor-pointer"
          >
            <GitHubLogoIcon className="w-4 h-4 hover:text-pink-600 transition-colors" />
          </a>
        </div>
        <p className="font-extralight">{description}</p>
      </div>
    </li>
  );
}
