import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Meta from "../components/userMeta"
import Sun from "../components/shapes/sun"

const Profile = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.name} />
            <article className="profile mx-auto px-6 pb-20 w-full max-w-4xl overflow-hidden">
                <header className="md:flex md:items-center mb-20 pt-20">
                    <div className="relative flex items-center justify-center mb-6 md:mb-0 md:mr-10 w-32 h-32 text-white rounded-full bg-gradient-to-b from-purple-800 to-purple-600">
                        <span className="absolute bottom-0 block px-2 py-1 text-sm text-purple-600 leading-none bg-white transform -rotate-6">
                            <Link
                                className="hover:underline"
                                to={`https://twitter.com/${frontmatter.twitter}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                @{frontmatter.twitter}
                            </Link>
                        </span>
                    </div>

                    <div>
                        <h1 className="mb-4 text-5xl md:text-6xl lg:text-7xl font-heading text-white">
                            {frontmatter.name}
                        </h1>

                        <Meta user={frontmatter} />
                    </div>
                </header>
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-2 text-lg font-bold text-white italic">
                        {`About ${frontmatter.name}`}
                    </h2>
                    <div className="relative">
                        <div
                            className="profile-about z-20 relative mb-20 p-8 text-purple-400 leading-relaxed border border-indigo-700 bg-indigo-900"
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                        <div className="z-10 absolute right-0 bottom-0 w-full h-full border border-indigo-700 bg-indigo-900 transform translate-x-2 translate-y-2"></div>
                        <Sun className="z-0 absolute -bottom-8 -left-12 text-pink-500" />
                    </div>
                </div>

                {frontmatter.expertise && (
                    <div className="mx-auto max-w-md">
                        <h2 className="mb-2 text-lg font-bold text-white italic">
                            Expertise
                        </h2>
                        <div className="relative">
                            <div className="z-20 relative profile-expertise mb-20 p-8 text-purple-400 leading-relaxed border border-indigo-700 bg-indigo-900">
                                <ul>
                                    {frontmatter.expertise
                                        .split(", ")
                                        .map(exp => (
                                            <li className="mb-2 last:mb-0">
                                                {exp}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="z-10 absolute right-0 bottom-0 w-full h-full border border-indigo-700 bg-indigo-900 transform translate-x-2 translate-y-2"></div>
                            <Sun
                                className="z-0 absolute -bottom-10 -right-16 w-32 h-32 text-pink-500"
                                style={{ zIndex: "-1" }}
                            />
                        </div>
                    </div>
                )}
                <footer>
                    <a
                        className="flex items-center justify-center mx-auto mt-32 p-4 w-80 text-white bg-pink-500 transform -rotate-6"
                        href={frontmatter.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Work with ${frontmatter.name}`}
                    >{`Work with ${frontmatter.name}`}</a>
                </footer>
            </article>
        </Layout>
    )
}

export default Profile

export const query = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
                name
                twitter
                type
                location
                website
                expertise
            }
        }
    }
`
