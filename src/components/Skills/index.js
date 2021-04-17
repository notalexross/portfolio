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
  const childrenAsArray = Children.toArray(children)
  const numChildren = childrenAsArray.length
  const numContainers = Math.ceil(numChildren / 2)

  const hasSingleChild = idx => numChildren % 2 !== 0 && idx === numContainers - 1

  const renderChildren = new Array(numContainers).fill().map((_, idx) => {
    const innerChildren = childrenAsArray.slice(idx * 2, idx * 2 + 2)
    const key = `${innerChildren[0].key + (innerChildren[1]?.key || '')}-container`

    return (
      <ItemsContainer key={key} hasSingleChild={hasSingleChild(idx)} {...restProps}>
        {innerChildren}
      </ItemsContainer>
    )
  })

  return <Container {...restProps}>{renderChildren}</Container>
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
