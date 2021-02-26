import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import { Feature } from "../components"

export default function FeatureContainer() {
  // const { sanityContent: content } = useStaticQuery(
  //   graphql`
  //     query contentQuery {
  //       sanityContent {
  //         homeTitle
  //         _rawHomeSubtitle
  //         homeImage {
  //           credit
  //           image {
  //             asset {
  //               fluid(maxWidth: 1920) {
  //                 ...GatsbySanityImageFluid
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // const imageFluid = content?.homeImage[0]?.image.asset.fluid

  const { sanityContent: content } = useStaticQuery(
    graphql`
      query contentQuery {
        sanityContent {
          homeTitle
          _rawHomeSubtitle
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

  // NOTE: gatsby-background-image issue:
  // when using either sanity or local, you have to add a maxWidth! Otherwise it defaults to 800px max-width...
  // It's supposed to scale above 800 when that happens, but it just never gives anything higher than 800 for some reason.
  // happens with regular gatsby-image too...
  // default: "sizes": "(max-width: 800px) 100vw, 800px"

  return (
    <Feature
      fluid={[
        imageFluid || '',
        `var(--bg-feature-gradient, none)`,
      ]}
      credit={content?.homeImage[0]?.credit}
    >
      <Feature.Content>
        <Feature.Title>{content?.homeTitle}</Feature.Title>
        <Feature.Subtitle>
          {content?._rawHomeSubtitle && (
            <BlockContent blocks={content?._rawHomeSubtitle} />
          )}
        </Feature.Subtitle>
      </Feature.Content>
      <Feature.ScrollAnchor
        className="fas fa-chevron-circle-down"
        href="#about"
      />
    </Feature>
  )
}
