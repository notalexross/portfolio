/* eslint-disable import/no-unused-modules */
import React from 'react'
import { Link, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Layout, SEO, Section, Article } from '../../components'

export default function ProjectPage({
  data: {
    project: {
      title,
      subdomain,
      url,
      skills,
      publishedAt,
      _rawBody: rawBody,
      desktopImage,
      mobileImage
    },
    siteSettings,
    allProjects
  },
  location
}) {
  let siteUrl = '#'
  if (url) {
    siteUrl = url
  } else {
    const projectDomain = siteSettings.domainNames.find(domain => (
      location.hostname?.endsWith(domain)
    ))
    if (projectDomain) {
      siteUrl = `https://${subdomain}.${projectDomain}`
    } else if (subdomain) {
      const { protocol, hostname } = new URL(siteSettings.canonical)
      siteUrl = `${protocol}//${subdomain}.${hostname}`
    }
  }

  return (
    <Layout>
      <SEO title={title || 'Project'} />
      <Section className="inverted">
        <Section.Content>
          <Article>
            <Article.Title>{title}</Article.Title>
            <Article.Subtitle>{publishedAt}</Article.Subtitle>
            <Article.Images href={siteUrl} target="_blank" rel="noopener noreferrer">
              <Article.Image
                fluid={desktopImage?.asset.localFile.childImageSharp.fluid}
                alt={`${title} - Desktop`}
                title={`${title} - Desktop`}
              />
              <Article.Image
                fluid={mobileImage?.asset.localFile.childImageSharp.fluid}
                alt={`${title} - Mobile`}
                title={`${title} - Mobile`}
              />
            </Article.Images>
            <Article.Keywords keywords={skills} />
            <Article.Body>{rawBody && <BlockContent blocks={rawBody} />}</Article.Body>
            <Article.Link href={siteUrl} target="_blank" rel="noopener noreferrer">
              Go to live Site
            </Article.Link>
          </Article>
          <Link to="/">Go back to the homepage</Link>
        </Section.Content>
        <Section.Aside>
          {/* TODO: Convert to its own component? */}
          <h2>
            <Link to="/projects">More Work</Link>
          </h2>
          <ul>
            {allProjects.nodes.map(
              project => project.title && (
                <li key={project.title}>
                  <Link to={`/projects/${project.slug?.current || ''}`}>
                    {project.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </Section.Aside>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query projectQuery($id: String!) {
    siteSettings: sanitySiteSettings {
      canonical
      domainNames
    }
    allProjects: allSanityProject(sort: { fields: publishedAt, order: DESC }) {
      nodes {
        title
        slug {
          current
        }
      }
    }
    project: sanityProject(id: { eq: $id }) {
      title
      subdomain
      url
      skills {
        title
        url
      }
      publishedAt
      _rawBody
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
`
