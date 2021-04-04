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

export default function Home({
  data: {
    sanityContent: { _rawAbout, featuredProjects: projects }
  }
}) {
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
            <Section.Text>{_rawAbout && <BlockContent blocks={_rawAbout} />}</Section.Text>
          </Section.Content>
        </Section>
      </ScrollNav.Wrapper>
      <ScrollNav.Wrapper id="skills">
        <Section className="inverted" style={{ backgroundColor: 'var(--clr-tertiary)' }}>
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
              <Link to="/projects" style={{ fontFamily: 'var(--ff-primary)' }}>
                My Work
              </Link>
            </Section.Title>
            <PortfolioContainer projects={projects} />
          </Section.Content>
        </Section>
      </ScrollNav.Wrapper>
      <ScrollNav.Wrapper id="contact">
        <Section className="inverted" style={{ backgroundColor: 'var(--clr-tertiary)' }}>
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
    sanityContent {
      _rawAbout
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
`
