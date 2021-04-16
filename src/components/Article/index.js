import React from 'react'
import {
  Container,
  Heading,
  Title,
  Subtitle,
  Keywords,
  Keyword,
  KeywordInner,
  Body,
  Links,
  Anchor,
  Images,
  Image,
  ImagePlaceholder
} from './styles'

export default function Article({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Article.Heading = function ArticleHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
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

Article.Keywords.Keyword = function ArticleKeywordsKeyword({ children, href, ...restProps }) {
  const handleClick = event => {
    event.target.blur()
  }

  return (
    <Keyword>
      <KeywordInner
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        {...restProps}
      >
        {children}
      </KeywordInner>
    </Keyword>
  )
}

Article.Body = function ArticleBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

Article.Links = function ArticleLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>
}

Article.Link = function ArticleLink({ children, ...restProps }) {
  const handleClick = event => {
    event.currentTarget.blur()
  }

  return (
    <>
      <Anchor onClick={handleClick} {...restProps}>{children}</Anchor>
      <br />
    </>
  )
}

Article.Images = function ArticleImages({ children, ...restProps }) {
  return <Images {...restProps}>{children}</Images>
}

Article.Image = function ArticleImage({ fluid, ...restProps }) {
  return fluid ? <Image fluid={fluid} {...restProps} /> : <ImagePlaceholder {...restProps} />
}
