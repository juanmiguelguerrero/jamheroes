import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import PlayButton from "../components/playButton"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <>
            <PlayButton />
            <Header siteTitle={data.site.siteMetadata?.title || `JAM Heroes`} />
            <main>{children}</main>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
