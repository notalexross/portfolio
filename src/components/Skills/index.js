import React, { Children } from 'react'
import { useAcknowledge } from '../../hooks'
import {
  Container,
  ItemsContainer,
  Item,
  Anchor,
  Hexagon,
  HexagonInner,
  Logo,
  Title
} from './styles'

export default function Skills({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Skills.ItemsContainer = function SkillsItemsContainer({ children, ...restProps }) {
  const hasSingleChild = Children.count(children) === 1

  return (
    <ItemsContainer hasSingleChild={hasSingleChild} {...restProps}>
      {children}
    </ItemsContainer>
  )
}

Skills.Item = function SkillsItem({ children, href, ...restProps }) {
  const handleClick = event => {
    event.currentTarget.blur()
  }

  return (
    <Item {...restProps}>
      <Anchor href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <Hexagon>
          <HexagonInner>{children}</HexagonInner>
        </Hexagon>
      </Anchor>
    </Item>
  )
}

Skills.Logo = function SkillsLogo({ children, LogoComponent, credit, ...restProps }) {
  const logoRef = useAcknowledge(credit)

  return (
    <Logo ref={logoRef} {...restProps}>
      {LogoComponent && <LogoComponent />}
    </Logo>
  )
}

Skills.Title = function SkillsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
