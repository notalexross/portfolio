/* eslint-disable import/no-unused-modules */
import React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, Section } from '../../components'
import { PortfolioContainer } from '../../containers'

export default function ProjectsPage({ data }) {
  const projects = data.allProjects.nodes

  return (
    <Layout>
      <SEO title="Projects" />
      <Section className="inverted">
        <Section.Content>
          <Section.Title>All Work</Section.Title>
          <PortfolioContainer projects={projects} />
        </Section.Content>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query allProjectQuery {
    allProjects: allSanityProject(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        subdomain
        url
        sourceUrl
        abstract: _rawAbstract
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
