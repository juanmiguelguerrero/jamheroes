import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
    <Layout>
        <SEO title="Contact" />
        <div className="mx-auto px-6 max-w-3xl">
            <div className="pt-8 mb-10">
                <h1 className="page-title font-heading text-6xl text-white">
                    <span>Contact</span>
                </h1>
            </div>
            <div className="page-content font-mono text-lg text-purple-200 leading-loose">
                <p className="mb-4">
                    Contact.
                </p>
            </div>
        </div>
    </Layout>
)

export default Contact
