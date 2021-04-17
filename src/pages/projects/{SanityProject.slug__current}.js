/* eslint-disable import/no-unused-modules */
import React from 'react'
import { Link, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import { Layout, SEO, Section, Article } from '../../components'
import { ProjectLinksContainer } from '../../containers'
import { useProjectUrl } from '../../hooks'

export default function ProjectPage({ data: { project, allProjects } }) {
  const { title, sourceUrl, skills, publishedAt, rawBody, desktopImage, mobileImage } = project
  const projectUrl = useProjectUrl(project)

  return (
    <Layout>
      <SEO title={title || 'Project'} />
      <Section className="inverted">
        <Section.Content>
          <Article>
            <Article.Heading>
              <div className="flex-container">
                <Article.Title>{title}</Article.Title>
                <ProjectLinksContainer project={project} />
              </div>
              <Article.Subtitle>{publishedAt}</Article.Subtitle>
            </Article.Heading>
            <Article.Images href={projectUrl} target="_blank" rel="noopener noreferrer">
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
            <Article.Keywords>
              {skills && skills.map(skill => (
                <Article.Keywords.Keyword key={skill.title} href={skill.url}>
                  {skill.title}
                </Article.Keywords.Keyword>
              ))}
            </Article.Keywords>
            <Article.Body>{rawBody && <BlockContent blocks={rawBody} />}</Article.Body>
            <Article.Links>
              {projectUrl && (
                <Article.Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                  Go to live site
                </Article.Link>
              )}
              {sourceUrl && (
                <Article.Link href={sourceUrl} target="_blank" rel="noopener noreferrer">
                  View source code
                </Article.Link>
              )}
              <Link to="/">Go back to the homepage</Link>
            </Article.Links>
          </Article>
        </Section.Content>
        <Section.Aside>
          {/* TODO: Convert to its own component? */}
          <h2>
            <Link to="/projects">More Work</Link>
          </h2>
          <ul>
            {allProjects.nodes.map(
              projectNode => projectNode.title && (
              <li key={projectNode.title}>
                <Link to={`/projects/${projectNode.slug?.current || ''}`}>
                  {projectNode.title}
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
      sourceUrl
      skills {
        title
        url
      }
      publishedAt
      rawBody: _rawBody
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
