import { IconType } from "react-icons/lib";
import { SiGithub } from "react-icons/si";

export default function Home() {
	return (
		<div className="absolute top-0 left-0 bottom-0 right-0 text-white flex items-center justify-center">
			<div className="space-y-6 text-center max-w-xl px-20 py-14 border-2 border-white/10 bg-black/50 rounded-xl backdrop-filter backdrop-blur-lg">
				<h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-silver via-silver to-pink">
					Kaito
				</h1>

				<SocialLink href="https://github.com/kaito-http" icon={SiGithub}>
					GitHub
				</SocialLink>

				<p className="opacity-75 text-xl">open source developer collective</p>
			</div>
		</div>
	);
}

function SocialLink(props: { icon: IconType; children: string; href: string }) {
	return (
		<a
			href={props.href}
			className="space-x-3 bg-silver px-3 py-1.5 text-black inline-flex items-center change-transform rounded-full transform transition-all hover:scale-95 duration-500">
			<span>{props.icon({ height: 24, width: 24, className: "inline" })}</span>
			<span>{props.children}</span>
		</a>
	);
}
