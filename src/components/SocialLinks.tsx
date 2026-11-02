import type { IconType } from "react-icons"
import { FiFacebook, FiInstagram } from "react-icons/fi"
import { site } from "../data/site"


export default function SocialLinks({mobileHidden = false}: {mobileHidden?: boolean}) {
    const socialIcons: Record<string, IconType> = {
        Instagram: FiInstagram,
        Facebook: FiFacebook
    }
    return (
    <>
        {site.social.length > 0 && (
            <ul className={mobileHidden ? "hidden items-center lg:flex" : "items-center flex"}>
                {site.social.map(({ name, url }) => {
                const Icon = socialIcons[name]
                return (
                    <li key={name}>
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={name}
                        className="grid size-11 place-items-center rounded-xl text-xl text-slate-300 transition hover:text-white"
                    >
                        <Icon aria-hidden="true" />
                    </a>
                    </li>
                )
                })}
            </ul>
        )}
    </>
    )
}
