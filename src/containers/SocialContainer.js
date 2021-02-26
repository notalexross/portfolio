import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Social } from '../components'

export default function SocialContainer() {
  const { sanityDetails: { social } } = useStaticQuery(
    graphql`
      query detailsQuery {
        sanityDetails {
          social {
            _key
            url
          }
        }
      }
    `
  )

  return (
    <Social>
      {social.map(socialItem => (
        <Social.Item key={socialItem._key} href={socialItem.url}>
          <Social.Icon url={socialItem.url} title={socialItem.title} />
        </Social.Item>
      ))}
    </Social>
  )
}