import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "./siteLogo"

const Header = ({ siteTitle }) => (
    <header className="banner py-12">
        <div className="mx-auto px-5 w-full max-w-7xl">
            <Logo />

            <nav>
                <ul className="flex flex-wrap md:justify-evenly">
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            activeClassName="underline"
                            to="/"
                            title="Jamstack Heroes"
                        >
                            <span
                                className="hidden md:block absolute -top-1 right-0 text-xs"
                                aria-hidden="true"
                            >
                                jam
                            </span>
                            <span className="font-heading">Heroes</span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            to="/"
                            title="Remote Jobs"
                        >
                            <span
                                className="hidden md:block absolute -top-1 right-0 text-xs"
                                aria-hidden="true"
                            >
                                remote
                            </span>
                            <span className="font-heading">Jobs</span>
                            <span
                                className="hidden md:block absolute -bottom-3 right-0 text-xs"
                                aria-hidden="true"
                            >
                                positions
                            </span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            to="/"
                            title="Jamstack Courses"
                        >
                            <span
                                className="hidden md:block absolute -top-1 right-0 text-xs"
                                aria-hidden="true"
                            >
                                learn
                            </span>
                            <span className="font-heading">Courses</span>
                            <span
                                className="hidden md:block absolute -bottom-3 right-0 text-xs"
                                aria-hidden="true"
                            >
                                jamstack
                            </span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            to="/"
                            title="Upcoming Events"
                        >
                            <span
                                className="hidden md:block absolute -top-1 right-0 text-xs"
                                aria-hidden="true"
                            >
                                upcoming
                            </span>
                            <span className="font-heading">Events</span>
                        </Link>
                    </li>
                    <li className="mr-6 md:mr-0">
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            to="/"
                            title="About Jamheroes"
                        >
                            <span
                                className="hidden md:block absolute -top-1 right-0 text-xs"
                                aria-hidden="true"
                            >
                                more
                            </span>
                            <span className="font-heading">About</span>
                            <span
                                className="hidden md:block absolute -bottom-3 right-0 text-xs"
                                aria-hidden="true"
                            >
                                jamheroes
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="relative text-2xl md:text-3xl text-white"
                            to="/"
                            title="Contact"
                        >
                            <span className="font-heading">Contact</span>
                            <span
                                className="hidden md:block absolute -bottom-3 right-0 text-xs"
                                aria-hidden="true"
                            >
                                me
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
