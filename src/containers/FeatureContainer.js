import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Feature } from '../components'

export default function FeatureContainer() {
  // Note: Must always specify maxWidth in fluid image query
  const { content } = useStaticQuery(
    graphql`
      query contentQuery {
        content: sanityContent {
          homeTitle
          homeSubtitle: _rawHomeSubtitle
          homeImage {
            credit
            image {
              asset {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const imageFluid = content?.homeImage[0]?.image.asset.localFile.childImageSharp.fluid
  const imageCredit = content?.homeImage[0]?.credit
  const title = content?.homeTitle
  const subtitle = content?.homeSubtitle

  return (
    <Feature fluid={[imageFluid || '', 'var(--bg-feature-gradient, none)']} credit={imageCredit}>
      <Feature.Content>
        <Feature.Title>{title}</Feature.Title>
        <Feature.Subtitle>{subtitle && <BlockContent blocks={subtitle} />}</Feature.Subtitle>
      </Feature.Content>
      <Feature.ScrollAnchor className="fas fa-chevron-circle-down" href="#about" />
    </Feature>
  )
}
