import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="JAMstack developers directory" />
        <div className="mx-auto px-6 pb-20 w-full max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-6 mb-10 px-6 py-4 border border-indigo-700">
                <select className="px-4 py-2 font-mono text-sm text-white w-full border border-indigo-700 bg-transparent appearance-none focus:outline-none">
                    <option>All locations</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Europe</option>
                    <option>Africa</option>
                    <option>Asia</option>
                </select>

                <select className="px-4 py-2 font-mono text-sm text-white w-full border border-indigo-700 bg-transparent appearance-none focus:outline-none">
                    <option>Freelancers & Agencies</option>
                    <option>Freelancers</option>
                    <option>Agencies</option>
                </select>

                <select className="px-4 py-2 font-mono text-sm text-white w-full border border-indigo-700 bg-transparent appearance-none focus:outline-none">
                    <option>All expertises</option>
                </select>

                <select className="px-4 py-2 font-mono text-sm text-white w-full border border-indigo-700 bg-transparent appearance-none focus:outline-none">
                    <option>Everyone</option>
                </select>
            </div>

            <div className="card-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="flex flex-col p-4 font-mono border-dashed border border-indigo-700">
                    <h2 className="mb-2 font-bold text-white">
                        Find a hero for your JAMstack project.
                    </h2>
                    <p className="mb-4 text-sm text-purple-400 leading-relaxed">
                        JAM Heroes is a directory of super-awesome JAMstack
                        developers.{" "}
                        <Link
                            className="text-purple-200 hover:text-white"
                            to="/about"
                        >
                            Read more →
                        </Link>
                    </p>

                    <a
                        className="mt-auto text-sm text-purple-200 hover:text-white"
                        href="https://github.com/wassim/jamheroes"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Add your profile"
                    >
                        You're a hero? Add your profile here
                    </a>
                </div>

                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Card data={node.frontmatter} key={node.id} />
                ))}
            </div>
        </div>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query IndexPageQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        slug
                        name
                        type
                        location
                        intro
                    }
                }
            }
        }
    }
`
