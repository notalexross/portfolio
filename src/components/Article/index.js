import React from 'react'
import {
  Container,
  Title,
  Subtitle,
  Keywords,
  Keyword,
  KeywordInner,
  Body,
  Link,
  Images,
  Image,
  ImagePlaceholder
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

Article.Keywords = function ArticleKeywords({ keywords, ...restProps }) {
  const handleClick = event => {
    event.target.blur()
  }

  return (
    <Keywords {...restProps}>
      {keywords.map(keyword => (
        <Keyword key={keyword.title}>
          <KeywordInner
            href={keyword.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            {keyword.title}
          </KeywordInner>
        </Keyword>
      ))}
    </Keywords>
  )
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

Article.Image = function ArticleImage({ fluid, ...restProps }) {
  return fluid ? <Image fluid={fluid} {...restProps} /> : <ImagePlaceholder {...restProps} />
}
