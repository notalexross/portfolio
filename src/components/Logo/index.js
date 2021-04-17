import React from 'react'
import { Container, Inner } from './styles'

export default function Logo({ children, to, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner to={to}>{children}</Inner>
    </Container>
  )
}
