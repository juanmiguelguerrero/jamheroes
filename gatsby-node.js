const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // Get all profiles
    const profiles = await graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            slug
                        }
                    }
                }
            }
        }
    `)

    // Handle errors
    if (profiles.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create profiles pages
    profiles.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `u/${node.frontmatter.slug}`,
            component: path.resolve(`./src/templates/profile.js`),
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}
