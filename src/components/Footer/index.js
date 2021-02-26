import React from 'react'
import { Container, Inner, ScrollAnchor } from './styles'

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

Footer.ScrollAnchor = function FooterScrollAnchor({ children, ...restProps }) {
  return <ScrollAnchor {...restProps}>{children}</ScrollAnchor>
}