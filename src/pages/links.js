import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Links = () => (
    <Layout>
        <SEO title="Links" />
        <div className="mx-auto px-6 max-w-3xl">
            <div className="pt-8 mb-10">
                <h1 className="page-title font-heading text-6xl text-white">
                    <span>Links</span>
                </h1>
            </div>
            <div className="page-content font-mono text-lg text-purple-200 leading-loose">
                <p className="mb-4">
                    Links.
                </p>
            </div>
        </div>
    </Layout>
)

export default Links
