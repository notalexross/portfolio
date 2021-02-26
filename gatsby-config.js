require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const token = process.env.SANITY_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // TODO: Change site icon
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Daniel Ross`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/favicon.ico`, // doesn't accept .ico? try "gatsby-plugin-favicon" instead?
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Open Sans`,
              variants: [`400`, `800`],
              fontDisplay: 'block'
            },
            {
              family: `Source Serif Pro`,
              variants: [`400`, `700`],
              fontDisplay: 'block'
            }
          ]
        }
      }
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token,
        watchMode: !isProd
        // overlayDrafts: !isProd && token,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        // graphqlTag: 'default',
      }
    },
    'gatsby-source-sanity-transform-images'
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
