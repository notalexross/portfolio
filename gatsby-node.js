/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig()
  if (config.mode === 'production') {
    // Turn off source maps in production
    actions.setWebpackConfig({
      devtool: false
    })
  }
}
