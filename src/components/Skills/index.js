import React, { Children } from 'react'
import { useAcknowledge } from '../../hooks'
import { Container, ItemsContainer, Item, Anchor, Hexagon, HexagonInner, Logo, Title } from './styles'

export default function Skills({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Skills.ItemsContainer = function SkillsItemsContainer({ children, ...restProps }) {
  const onlyOneChild = Children.count(children) === 1

  return <ItemsContainer onlyOneChild={onlyOneChild} {...restProps}>{children}</ItemsContainer>
}

Skills.Item = function SkillsItem({ href, children, ...restProps }) {
  const handleClick = event => {
    event.currentTarget.blur()
  }

  return (
    <Item {...restProps}>
      <Anchor href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <Hexagon>
          <HexagonInner>
            {children}
          </HexagonInner>
        </Hexagon>
      </Anchor>
    </Item>
  )
}

Skills.Logo = function SkillsLogo({ LogoComponent, credit, children, ...restProps }) {
  const logoRef = useAcknowledge(credit)

  return (
    <Logo ref={logoRef} {...restProps}>
      {LogoComponent ? <LogoComponent /> : null}
    </Logo>
  )
}

Skills.Title = function SkillsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}