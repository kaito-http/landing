import { IconType } from "react-icons/lib";
import * as icons from "react-icons/si";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 bottom-0 right-0 text-white flex items-center justify-center">
      <div className="space-y-6 text-center max-w-xl p-20 rounded-lg backdrop-filter backdrop-blur-lg">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-silver via-silver to-pink">
          Kaito
        </h1>
        <p className="opacity-75 text-xl">Another open source developer collective</p>
        <div className="space-x-3">
          <SocialLink href="https://github.com/kaito-http" icon={icons.SiGithub}>
            GitHub
          </SocialLink>
        </div>
      </div>
    </div>
  );
}

function SocialLink(props: { icon: IconType; children: string; href: string }) {
  return (
    <a href={props.href} className="space-x-3 change-transform inline-block transform transition-all hover:scale-95">
      <span>{props.icon({ height: 24, width: 24, className: "inline" })}</span>
      <span>{props.children}</span>
    </a>
  );
}
