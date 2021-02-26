import React from 'react'
import { Container, Inner, Item, StyledLink } from './styles'

export default function Nav({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>
        {children}
      </Inner>
    </Container>
  )
}

Nav.Item = function NavItem({ to, onClick = () => {}, children, ...restProps }) {

  const handleClick = event => {
    onClick()
    event.target.blur()
  }

  return (
    <Item {...restProps}>
      <StyledLink to={to} onClick={handleClick}>
        {children}
      </StyledLink>
    </Item>
  )
}