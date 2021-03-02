import React from 'react'
import { Container, Inner, ScrollAnchor, Copyright } from './styles'

export default function Footer({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Footer.ScrollAnchor = function FooterScrollAnchor({ children, ...restProps }) {
  return <ScrollAnchor {...restProps}>{children}</ScrollAnchor>
}

Footer.Copyright = function FooterCopyright({ children, ...restProps }) {
  return <Copyright {...restProps}>{children}</Copyright>
}
