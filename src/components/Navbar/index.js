import React from 'react'
import { Container } from './styles'

export default function Navbar({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}