/* eslint-disable import/no-unused-modules */
import React from 'react'
import { graphql, Link } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { SEO, Layout, Section, ScrollNav } from '../components'
import {
  PortfolioContainer,
  SkillsContainer,
  ContactFormContainer,
  FeatureContainer
} from '../containers'

export default function Home({ data }) {
  const { about, projects } = data.content

  return (
    <Layout>
      <SEO title="Home" />
      <ScrollNav.Wrapper id="home">
        <FeatureContainer />
      </ScrollNav.Wrapper>
      <ScrollNav.Wrapper id="about">
        <Section>
          <Section.Content>
            <Section.Title>About Me</Section.Title>
            <Section.Text>{about && <BlockContent blocks={about} />}</Section.Text>
          </Section.Content>
        </Section>
      </ScrollNav.Wrapper>
      <ScrollNav.Wrapper id="skills">
        <Section className="inverted" backgroundColor="var(--clr-tertiary)">
          <Section.Content>
            <Section.Title>Skills</Section.Title>
            <SkillsContainer />
          </Section.Content>
        </Section>
      </ScrollNav.Wrapper>
      <ScrollNav.Wrapper id="work">
        <Section className="inverted">
          <Section.Content>
            <Section.Title>
              <Link to="/projects">My Work</Link>
            </Section.Title>
            <PortfolioContainer projects={projects} />
          </Section.Content>
        </Section>
      </ScrollNav.Wrapper>
      <ScrollNav.Wrapper id="contact">
        <Section className="inverted" backgroundColor="var(--clr-tertiary)">
          <Section.Content>
            <Section.Title>Contact Me</Section.Title>
            <ContactFormContainer />
          </Section.Content>
        </Section>
      </ScrollNav.Wrapper>
    </Layout>
  )
}

// NOTE: Must add a maxWidth to fluid image requests, otherwise maxes out at 800px wide.
export const query = graphql`
  query {
    content: sanityContent {
      about: _rawAbout
      projects: featuredProjects {
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
