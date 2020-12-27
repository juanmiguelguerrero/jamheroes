import React from "react"

import UserIcon from "../components/icons/user"
import UsersIcon from "../components/icons/users"
import PinIcon from "../components/icons/pin"
import LinkIcon from "../components/icons/link"

const Meta = ({ user }) => {
    const urlDomain = url => {
        if (typeof document !== "undefined") {
            let a = document.createElement("a")
            a.href = url

            return a.hostname
        }
    }

    return (
        <ul className="sm:flex text-white">
            <li className="flex items-center mb-2 md:mb-0 mr-8">
                {user.type == "freelancer" ? <UserIcon /> : <UsersIcon />}
                <span className="ml-2 capitalize">{user.type}</span>
            </li>
            <li className="flex items-center mb-2 md:mb-0 mr-8">
                <PinIcon />
                <span>{user.location}</span>
            </li>
            {user.website && (
                <li className="flex items-center">
                    <LinkIcon />
                    <a
                        className="border-dashed border-b border-transparent hover:border-white"
                        href={user.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {urlDomain(user.website)}
                    </a>
                </li>
            )}
        </ul>
    )
}

export default Meta
