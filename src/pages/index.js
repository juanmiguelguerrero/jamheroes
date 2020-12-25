import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Card from "../components/card"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <div className="card-grid grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto py-20 px-6 w-full max-w-7xl">
            {data.allAirtableUser.nodes.map(user => (
                <Card data={user.data} key={user.id} />
            ))}
        </div>
    </Layout>
)

export default IndexPage

export const query = graphql`
    query IndexPageQuery {
        allAirtableUser {
            nodes {
                id
                data {
                    name
                    slug
                    location
                    type
                    intro
                }
            }
        }
    }
`
