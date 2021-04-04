import React from 'react'
import { Container, Item, Anchor, Icon } from './styles'

export default function Social({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Social.Item = function SocialItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Social.Icon = function SocialIcon({ url, socialNetwork = 'link', children, ...restProps }) {
  const handleClick = event => {
    event.currentTarget.blur()
  }

  return (
    <Anchor
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      {...restProps}
    >
      <Icon className={`fab fa-${socialNetwork.toLowerCase()} fa-fw`}>{children}</Icon>
    </Anchor>
  )
}
