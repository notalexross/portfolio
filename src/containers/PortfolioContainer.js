import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Portfolio } from '../components'

export default function PortfolioContainer() {
  const { sanityContent: { featuredProjects: projects } } = useStaticQuery(graphql`
    query portfolioQuery {
      sanityContent {
        featuredProjects {
          title
          _rawAbstract
          slug {
            current
          }
          skills {
            title
            url
          }
          desktopImage {
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
          mobileImage {
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
  `)

  // NOTE: must add a maxWidth to fluid requests, otherwise maxes out at 800px wide.

  return (
    <Portfolio>
      {projects.map(project => (
        <Portfolio.Item
          key={project.title}
          to={`/projects/${project.slug?.current || ''}`}
        >
          <Portfolio.Item.Content>
            <Portfolio.Item.Title>{project.title}</Portfolio.Item.Title>
            <Portfolio.Item.Subtitle>{project.publishedAt}</Portfolio.Item.Subtitle>
            <Portfolio.Item.Text>
              {project._rawAbstract && (
                <BlockContent blocks={project._rawAbstract} />
              )}
            </Portfolio.Item.Text>
            <Portfolio.Item.Keywords>
              {project.skills.map(skill => (
                <Portfolio.Item.Keywords.Keyword key={skill.title} href={skill.url}>
                  {skill.title}
                </Portfolio.Item.Keywords.Keyword>
              ))}
            </Portfolio.Item.Keywords>
          </Portfolio.Item.Content>
          <Portfolio.Item.Images>
            <Portfolio.Item.ImageDesktop
              fluid={project.desktopImage?.asset.localFile.childImageSharp.fluid}
              alt={`${project.title} - Desktop`}
              title={`${project.title} - Desktop`}
            />
            <Portfolio.Item.ImageMobile
              fluid={project.mobileImage?.asset.localFile.childImageSharp.fluid}
              alt={`${project.title} - Mobile`}
              title={`${project.title} - Mobile`}
            />
          </Portfolio.Item.Images>
        </Portfolio.Item>
      ))}
    </Portfolio>
  )
}
