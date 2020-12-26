const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const userTemplate = path.resolve(`./src/templates/user.js`)

    // Get all profiles
    const users = await graphql(`
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
    if (users.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // Create profiles pages
    users.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: `u/${node.frontmatter.slug}`,
            component: userTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        })
    })
}
