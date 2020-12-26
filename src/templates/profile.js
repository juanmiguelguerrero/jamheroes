import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Profile = ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <Layout>
            <SEO title={frontmatter.name} />
            <article className="profile mx-auto px-6 pb-20 w-full max-w-4xl">
                <header className="md:flex md:items-center mb-20 pt-20">
                    <div className="relative flex items-center justify-center mb-6 md:mb-0 md:mr-10 w-32 h-32 text-white rounded-full bg-gradient-to-b from-purple-800 to-purple-600">
                        <span className="absolute bottom-0 block px-2 py-1 font-mono text-sm text-purple-600 leading-none bg-white transform -rotate-6">
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

                        <ul className="sm:flex font-mono font-medium text-white">
                            <li className="mr-8 capitalize">
                                {frontmatter.type}
                            </li>
                            <li className="mr-8">{frontmatter.location}</li>
                            <li className="">{frontmatter.link}</li>
                        </ul>
                    </div>
                </header>
                <div className="mx-auto max-w-2xl">
                    <h2 className="mb-2 font-mono text-lg font-bold text-white italic">
                        {`About ${frontmatter.name}`}
                    </h2>
                    <div
                        className="profile-about mb-20 p-8 font-mono text-purple-400 leading-relaxed border border-indigo-700"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
                {frontmatter.expertise && (
                    <div className="mx-auto max-w-md">
                        <h2 className="mb-2 font-mono text-lg font-bold text-white italic">
                            Expertise
                        </h2>
                        <div className="profile-expertise mb-20 p-8 font-mono text-purple-400 leading-relaxed border border-indigo-700">
                            <ul>
                                {frontmatter.expertise.split(", ").map(exp => (
                                    <li className="mb-2 last:mb-0">{exp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
                <footer>
                    <a
                        className="flex items-center justify-center mx-auto p-4 w-80 font-mono text-purple-200 border border-indigo-700 hover:text-white"
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
