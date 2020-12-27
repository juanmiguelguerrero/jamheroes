import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Newsletter = () => (
    <Layout>
        <SEO title="Newsletter" />
        <div className="mx-auto px-6 max-w-3xl">
            <div className="pt-8 mb-10">
                <h1 className="page-title font-heading text-6xl text-white">
                    <span>Newsletter</span>
                </h1>
            </div>
            <div className="page-content text-lg text-purple-200 leading-loose">
                <p className="mb-4">
                    Newsletter.
                </p>
            </div>
        </div>
    </Layout>
)

export default Newsletter
