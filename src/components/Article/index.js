import React from 'react'
import {
  Container,
  Title,
  Subtitle,
  Keywords,
  Body,
  Link,
  Images,
  Image
} from './styles'

export default function Article({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Article.Title = function ArticleTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Article.Subtitle = function ArticleSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Article.Keywords = function ArticleKeywords({ children, ...restProps }) {
  return <Keywords {...restProps}>{children}</Keywords>
}

Article.Body = function ArticleBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

Article.Link = function ArticleLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Article.Images = function ArticleImages({ children, ...restProps }) {
  return <Images {...restProps}>{children}</Images>
}

Article.Image = function ArticleImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>
}
