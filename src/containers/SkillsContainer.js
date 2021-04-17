import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Skills } from '../components'

export default function SkillsContainer() {
  const { content, allSkills } = useStaticQuery(
    graphql`
      query skillsQuery {
        content: sanityContent {
          skills: featuredSkills {
            title
            url
            icon {
              credit
              svg
            }
          }
        }
        allSkills: allSanitySkill(filter: { title: { eq: "Default" } }) {
          edges {
            node {
              id
              title
              icon {
                credit
                svg
              }
            }
          }
        }
      }
    `
  )

  const { skills } = content
  const defaultIcon = allSkills.edges[0].node.icon[0]

  const renderSkills = skills.map(skill => {
    const iconSvg = skill.icon[0]?.svg || defaultIcon.svg
    const credit = skill.icon[0]?.svg ? skill.icon[0]?.credit : defaultIcon.credit

    // eslint-disable-next-line react/no-danger
    const LogoComponent = () => <div dangerouslySetInnerHTML={{ __html: iconSvg }} />

    return (
      <Skills.Item key={skill.title} href={skill.url} title={skill.title}>
        <Skills.Logo LogoComponent={LogoComponent} credit={credit} />
        <Skills.Title>{skill.title}</Skills.Title>
      </Skills.Item>
    )
  })

  return <Skills>{renderSkills}</Skills>
}
