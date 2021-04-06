import React from 'react'
import { IconLinks } from '../components'
import { useProjectUrl } from '../hooks'

export default function ProjectLinksContainer({ project }) {
  const projectUrl = useProjectUrl(project)
  const { sourceUrl } = project

  return (
    <IconLinks>
      {projectUrl && <IconLinks.Link className="fas fa-globe fa-fw" href={projectUrl} />}
      {sourceUrl && <IconLinks.Link className="fas fa-code-branch fa-fw" href={sourceUrl} />}
    </IconLinks>
  )
}
