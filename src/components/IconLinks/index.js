import React from 'react'
import { Container, Anchor, Icon } from './styles'

export default function IconLinks({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

IconLinks.Link = function IconLinksLink({ href, ...restProps }) {
  const handleClick = event => {
    event.currentTarget.blur()
  }

  return (
    <Anchor href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <Icon {...restProps} />
    </Anchor>
  )
}
