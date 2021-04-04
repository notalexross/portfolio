import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { Portfolio } from '../components'

export default function PortfolioContainer({ projects }) {
  return (
    <Portfolio>
      {projects.map(({ _rawAbstract: rawAbstract, ...project }) => (
        <Portfolio.Item key={project.title} to={`/projects/${project.slug?.current || ''}`}>
          <Portfolio.Item.Content>
            <Portfolio.Item.Title>{project.title}</Portfolio.Item.Title>
            <Portfolio.Item.Subtitle>{project.publishedAt}</Portfolio.Item.Subtitle>
            <Portfolio.Item.Text>
              {rawAbstract && <BlockContent blocks={rawAbstract} />}
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
