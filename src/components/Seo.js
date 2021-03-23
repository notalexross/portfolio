import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ description, lang, meta, title }) {
  const { sanitySiteSettings: site } = useStaticQuery(
    graphql`
      query siteMetaQuery {
        sanitySiteSettings {
          title
          description
          keywords
          canonical
          image {
            asset {
              fixed(width: 1200) {
                src
              }
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site?.description
  const defaultTitle = site?.title
  const imageURL = site?.image?.asset?.fixed?.src

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={meta}
    >
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={site?.keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageURL} />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" integrity="sha256-46qynGAkLSFpVbEBog43gvNhfrOj+BmwXdxFgVK/Kvc=" crossorigin="anonymous" />
      <link rel="canonical" href={site?.canonical} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}
