import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Social } from '../components'

export default function SocialContainer() {
  const {
    sanityDetails: { social }
  } = useStaticQuery(
    graphql`
      query detailsQuery {
        sanityDetails {
          social {
            _key
            url
            name
          }
        }
      }
    `
  )

  return (
    <Social>
      {social.map(({ _key: key, url, name }) => (
        <Social.Item key={key}>
          <Social.Icon url={url} socialNetwork={name} title={name} />
        </Social.Item>
      ))}
    </Social>
  )
}
