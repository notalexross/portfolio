import { useStaticQuery, graphql } from 'gatsby'
import { useLocation } from '@reach/router'

export default function useProjectUrl({ url, subdomain }) {
  const location = useLocation()
  const { siteSettings } = useStaticQuery(
    graphql`
      query siteMetaProjectQuery {
        siteSettings: sanitySiteSettings {
          canonical
          domainNames
        }
      }
    `
  )

  let projectUrl
  if (url) {
    projectUrl = url
  } else {
    const projectDomain = siteSettings.domainNames.find(domain => (
      location.hostname?.endsWith(domain)
    ))
    if (projectDomain) {
      projectUrl = `https://${subdomain}.${projectDomain}`
    } else if (subdomain) {
      const { protocol, hostname } = new URL(siteSettings.canonical)
      projectUrl = `${protocol}//${subdomain}.${hostname}`
    }
  }

  return projectUrl
}
