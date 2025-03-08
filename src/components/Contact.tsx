import {
  TwitterLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export default function Contact() {
  return (
    <section className={"max-w-3xl px-5 py-8 mx-auto"}>
      <div className="flex gap-x-4 pl-2.5">
        <a href="https://github.com/AbdullahBera" target="_blank">
          <GitHubLogoIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-all hover:cursor-pointer hover:rotate-3" />
        </a>
        <a href="https://x.com/aberakucuk" target="_blank">
          <TwitterLogoIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-all hover:cursor-pointer hover:rotate-3" />
        </a>
        <a href="https://www.linkedin.com/in/abdullahberakucuk/" target="_blank">
          <LinkedInLogoIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 transition-all hover:cursor-pointer hover:rotate-3" />
        </a>
      </div>
    </section>
  );
}