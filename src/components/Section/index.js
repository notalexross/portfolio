import React from 'react'
import {
  Container,
  Inner,
  Title,
  Content,
  Text,
  Aside,
  Heading,
  List,
  ListItem,
  StyledLink
} from './styles'

export default function Section({ children, backgroundColor, ...restProps }) {
  return (
    <Container backgroundColor={backgroundColor} {...restProps}>
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

Section.Heading = function SectionHeading({ children, to, ...restProps }) {
  return (
    <Heading {...restProps}>{to ? <StyledLink to={to}>{children}</StyledLink> : children}</Heading>
  )
}

Section.Links = function SectionLinks({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>
}

Section.Link = function SectionLink({ children, to, ...restProps }) {
  return (
    <ListItem {...restProps}>
      <StyledLink to={to}>{children}</StyledLink>
    </ListItem>
  )
}
