import React from 'react'
import { Link, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Layout, SEO, Section, Article } from '../../components'

export default function ProjectPage({ data: { project, siteSettings, allProjects }, location }) {

  let siteUrl = '#'
  if (project.url) {
    siteUrl = project.url
  } else {
    const projectDomain = siteSettings.domainNames.find(domain => location.hostname?.endsWith(domain))
    if (projectDomain) {
      siteUrl = `https://${project.subdomain}.${projectDomain}`
    } else if (project.subdomain) {
      const { protocol, hostname } = new URL(siteSettings.canonical)
      siteUrl = `${protocol}//${project.subdomain}.${hostname}`
    }
  }

  return (
    <Layout>
      <SEO title={project.title || 'Project'} />
      <Section className="inverted">
        <Section.Content>
          <Article>
            <Article.Title>{project.title}</Article.Title>
            <Article.Subtitle>{project.publishedAt}</Article.Subtitle>
            <Article.Images href={siteUrl} target="_blank" rel="noopener noreferrer">
              <Article.Image
                fluid={project.desktopImage?.asset.localFile.childImageSharp.fluid}
                alt={`${project.title} - Desktop`}
                title={`${project.title} - Desktop`}
              />
              <Article.Image
                fluid={project.mobileImage?.asset.localFile.childImageSharp.fluid}
                alt={`${project.title} - Mobile`}
                title={`${project.title} - Mobile`}
              />
            </Article.Images>
            <Article.Keywords keywords={project.skills} />
            <Article.Body>
              {project._rawBody && <BlockContent blocks={project._rawBody} />}
            </Article.Body>
            <Article.Link href={siteUrl} target="_blank" rel="noopener noreferrer">
              Go to live Site
            </Article.Link>
          </Article>
          <Link to="/">Go back to the homepage</Link>
        </Section.Content>
        <Section.Aside>
          {/* TODO: Convert to its own component? */}
          <h2><Link to={`/projects`}>More Work</Link></h2>
          <ul>
            {allProjects.nodes.map((project, idx) => (
              project.title && (
                <li key={idx}>
                  {project.title && (
                    <Link
                      to={`/projects/${project.slug?.current || ''}`}
                    >
                      {project.title}
                    </Link>
                  )}
                </li>
              )
            ))}
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
    allProjects: allSanityProject(sort: {fields: publishedAt, order: DESC}) {
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
        title,
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
