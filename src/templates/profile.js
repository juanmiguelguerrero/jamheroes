import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Profile = ({ data }) => {
    const user = data.airtableUser.data

    return (
        <Layout>
            <SEO title={user.name} />
            <article className="mx-auto px-5 pb-20 w-full max-w-4xl">
                <header className="md:flex md:items-center mb-20 pt-20">
                    <div className="relative flex items-center justify-center mb-6 md:mb-0 md:mr-10 w-32 h-32 text-white rounded-full bg-purple-800">
                        <svg
                            className="transform -rotate-6"
                            width="80"
                            viewBox="0 0 100 50"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M76.777 0H23.223C10.383 0 0 11.197 0 25c-.022 13.803 10.383 25 23.223 25 15.707 0 20.65-13.469 21.795-16.685 1.98-5.583 8.005-5.526 9.963 0C56.127 36.531 61.071 50 76.777 50c12.84 0 23.245-11.197 23.223-25 0-13.803-10.383-25-23.223-25zM26.062 31.73c-6.116 0-11.09-4.918-11.09-10.96 0-6.694 7.3-8.61 12.645-8.61 5.971 0 9.536 3.697 9.536 9.891 0 5.697-4.56 9.679-11.09 9.679zm48.071 0c-6.529 0-11.09-3.98-11.09-9.679 0-6.194 3.564-9.89 9.535-9.89 7.332 0 12.646 3.068 12.646 8.608 0 6.043-4.976 10.961-11.09 10.961z"
                                fill="currentColor"
                                fill-rule="nonzero"
                            />
                        </svg>
                        <span className="absolute bottom-0 block px-2 py-1 font-mono text-sm text-purple-600 leading-none bg-white transform -rotate-12">
                            @wassim
                        </span>
                    </div>

                    <div>
                        <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-heading text-white">
                            {user.name}
                        </h1>

                        <ul className="sm:flex font-mono font-medium text-white">
                            <li className="mr-8 capitalize">
                                {user.type}
                            </li>
                            <li className="mr-8">{user.location}</li>
                            <li className="">{user.link}</li>
                        </ul>
                    </div>
                </header>
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-2 font-mono text-lg font-bold text-white italic">
                        About {user.name}
                    </h2>
                    <div className="p-8 font-mono text-white leading-relaxed border border-white">
                        <p>
                            Hi there, I’m Wassim. I have over 15 years
                            experience in design and development.
                        </p>
                        <p>
                            Wether I built an existing design or a create a
                            custom one fitting your brand, my websites will
                            always look good, perform, rank and are accessible:
                            on any device.
                        </p>
                    </div>
                </div>
                <footer></footer>
            </article>
        </Layout>
    )
}

export default Profile

export const query = graphql`
    query($slug: String!) {
        airtableUser(data: { slug: { eq: $slug } }) {
            data {
                name
                type
                location
                link
            }
        }
    }
`
