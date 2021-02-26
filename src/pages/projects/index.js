import React from 'react'
import { graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Layout, SEO, Section, Portfolio } from '../../components'

export default function ProjectsPage({ data: { allSanityProject: { nodes: projects } } }) {

  return (
    <Layout>
      <SEO title="Projects" />
      <Section className="inverted">
        <Section.Content>
          <Section.Title>All Work</Section.Title>
          <Portfolio>
            {projects.map(project => (
              <Portfolio.Item
                key={project.title}
                to={`/projects/${project.slug.current}`}
              >
                <Portfolio.Item.Content>
                  <Portfolio.Item.Title>{project.title}</Portfolio.Item.Title>
                  <Portfolio.Item.Subtitle>{project.publishedAt}</Portfolio.Item.Subtitle>
                  <Portfolio.Item.Text>
                    {project._rawAbstract && (
                      <BlockContent blocks={project._rawAbstract} />
                    )}
                  </Portfolio.Item.Text>
                  {/* TODO: convert this to a single component that takes skills array as children or prop */}
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
                    fluid={project.desktopImage.asset.localFile.childImageSharp.fluid}
                    alt={`${project.title} - Desktop`}
                    title={`${project.title} - Desktop`}
                  />
                  <Portfolio.Item.ImageMobile
                    fluid={project.mobileImage.asset.localFile.childImageSharp.fluid}
                    alt={`${project.title} - Mobile`}
                    title={`${project.title} - Mobile`}
                  />
                </Portfolio.Item.Images>
              </Portfolio.Item>
            ))}
          </Portfolio>
        </Section.Content>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query allProjectQuery {
    allSanityProject(sort: {fields: publishedAt, order: DESC}) {
      nodes {
        title
        _rawAbstract
        slug {
          current
        }
        skills {
          title
          url
        }
        publishedAt
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
`