import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
    <Layout>
        <SEO title="About" />
        <div className="mx-auto px-6 max-w-3xl">
            <div className="pt-8 mb-10">
                <h1 className="page-title font-heading text-6xl text-white">
                    <span>About</span>
                </h1>
            </div>
            <div className="pb-20 text-lg text-purple-200 leading-loose">
                <h2 className="mb-2 text-xl font-bold text-white italic">
                    The What
                </h2>
                <p className="mb-4">
                    JAM Heroes is a fast-growing directory of JAMstack
                    developers from all around the world. Whether you are a
                    freelancer or an agency, you can join the community and
                    submit your own profile.
                </p>
                <p className="mb-8">
                    JAM Heroes is also a place where you can find some useful
                    information and resources around the JAMstack.
                </p>

                <h2 className="mb-2 text-xl font-bold text-white italic">
                    The Why
                </h2>
                <p className="mb-8">
                    Initially, I wanted to contribute to Gatsby's Silly Site
                    Challenge and make something just for fun, then I told
                    myself why not make it useful too? So I came up with this
                    silly idea; a directory of JAMstackers in a 80s/retro style
                    theme.
                </p>

                <h2 className="mb-2 text-xl font-bold text-white italic">
                    The Who
                </h2>
                <p className="mb-6">
                    My name is <Link to="/u/wassim-bourguiba">Wassim</Link>, I'm a full-stack developer from sunny
                    Tunisia.
                </p>
            </div>
        </div>
    </Layout>
)

export default About
