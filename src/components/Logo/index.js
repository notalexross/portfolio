import React from 'react'
import { Container, Inner } from './styles'

export default function Logo({ to, children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner to={to}>{children}</Inner>
    </Container>
  )
}
