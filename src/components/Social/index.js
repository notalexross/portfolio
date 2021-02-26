import React from "react"
import { Container, Item, Anchor, Icon } from "./styles"

export default function Social({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Social.Item = function SocialItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Social.Icon = function SocialIcon({ url, children, ...restProps }) {
  const handleClick = event => {
    event.currentTarget.blur()
  }

  const parser = typeof window !== 'undefined'  ? document.createElement('a') : {}
  parser.href = url
  const hostname = parser?.hostname
  const network = hostname?.split('.').reverse()[1]

  const faClassName = hostname === (typeof window !== 'undefined' && window.location.hostname) ? 'fas fa-link fa-fw' : `fab fa-${network} fa-fw`

  return (
    <Anchor
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...restProps}
    >
      <Icon className={faClassName}>{children}</Icon>
    </Anchor>
  )
}
