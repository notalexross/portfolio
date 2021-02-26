import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Skills } from '../components'

export default function SkillsContainer() {

  const { sanityContent: { featuredSkills: skills }, allSanitySkill: { edges: [{ node: { icon: [defaultIcon] }}] } } = useStaticQuery(
    graphql`
      query skillsQuery {
        sanityContent {
          featuredSkills {
            title
            url
            icon {
              credit
              svg
            }
          }
        }
        allSanitySkill(filter: {title: {eq: "Default"}}) {
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

  const pairs = skills.reduce((acc, skill, idx) => {
    const iconSvg = skill.icon[0]?.svg || defaultIcon.svg
    const credit = skill.icon[0]?.svg ? skill.icon[0]?.credit : defaultIcon.credit
    const LogoComponent = () => <div dangerouslySetInnerHTML={{__html: iconSvg}}></div>

    acc[Math.floor(idx/2)] = acc[Math.floor(idx/2)] || []
    acc[Math.floor(idx/2)][idx % 2] = (
      <Skills.Item key={idx % 2} href={skill.url} title={skill.title}>
        <Skills.Logo
          LogoComponent={LogoComponent}
          credit={credit}
        />
        <Skills.Title>{skill.title}</Skills.Title>
      </Skills.Item>
    )
    return acc
  }, [])

  return (
    <Skills>
      {pairs.map((pair, idx) => (
        <Skills.ItemsContainer key={idx}>
          {pair}
        </Skills.ItemsContainer>
      ))}
    </Skills>
  )
}