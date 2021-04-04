import React from 'react'
import { Container, Inner, Title, Content, Text, Aside } from './styles'

export default function Section({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Section.Title = function SectionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Section.Content = function SectionContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Section.Text = function SectionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Section.Aside = function SectionAside({ children, ...restProps }) {
  return <Aside {...restProps}>{children}</Aside>
}
