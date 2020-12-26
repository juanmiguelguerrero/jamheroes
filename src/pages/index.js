import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="JAMstack developers directory" />
        <div className="card-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto py-20 px-6 w-full max-w-7xl">
            <a
                className="flex items-center justify-center p-4 font-mono text-sm text-purple-400 hover:text-white border-dashed border border-indigo-700"
                href=""
                target="_blank"
                rel="noopener noreferrer"
                title="Add your profile"
            >
                Add your profile here
            </a>

            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card data={node.frontmatter} key={node.id} />
            ))}
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
