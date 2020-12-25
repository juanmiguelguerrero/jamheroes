const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    // profiles
    const profiles = await graphql(`
        {
            allAirtableUser {
                edges {
                    node {
                        data {
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        result.data.allAirtableUser.edges.forEach(({ node })=> {
            createPage({
                path: `u/${node.data.slug}`,
                component: path.resolve(`./src/templates/profile.js`),
                context: {
                    slug: node.data.slug,
                },
            })
        })
    })
}
