import Link from "next/link"

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: "https://github.com/HexCodeBite" },
    { icon: <FaLinkedinIn />, path: "" },
    { icon: <FaYoutube />, path: "" },
    { icon: <FaTwitter />, path: "" },
]

const Socials = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((social, index) => {
            return <Link key={index} href={social.path} className={iconStyles}>{social.icon}</Link>
        })}
    </div>

}

export default Socials;