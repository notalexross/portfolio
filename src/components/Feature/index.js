import React from 'react'
import { Container, Inner, Content, Title, Subtitle, ScrollAnchor } from './styles'
import { useAcknowledge } from '../../hooks'

export default function Feature({ credit, children, ...restProps }) {
  const backgroundRef = useAcknowledge(credit)

  return (
    <Container ref={backgroundRef} Tag="section" {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Feature.Content = function FeatureContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Feature.Subtitle = function FeatureSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Feature.ScrollAnchor = function FeatureScrollAnchor({ children, ...restProps }) {
  return <ScrollAnchor {...restProps}>{children}</ScrollAnchor>
}
