import React, { createContext, useContext } from 'react'
import { Container, Item, Content, Images, ImagesInner, ImageDesktop, ImageMobileContainer, Shadow, ImageMobile, StyledLink, Title, Subtitle, Heading, Text, Keywords, Keyword, KeywordInner } from './styles'

const ItemContext = createContext()

export default function Portfolio({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Portfolio.Item = function PortfolioItem({ to, children, ...restProps }) {
  return (
    <ItemContext.Provider value={{ to }}>
      <Item {...restProps}>{children}</Item>
    </ItemContext.Provider>
  )
}

Portfolio.Item.Images = function PortfolioItemImages({ children, ...restProps }) {
  const { to } = useContext(ItemContext)

  return (
    <Images to={to} {...restProps}>
      <ImagesInner>{children}</ImagesInner>
    </Images>
  )
}

Portfolio.Item.ImageDesktop = function PortfolioItemImageDesktop({ ...restProps }) {
  return <ImageDesktop {...restProps} />
}

Portfolio.Item.ImageMobile = function PortfolioItemImageMobile({ ...restProps }) {
  return (
    <ImageMobileContainer>
      <Shadow />
      <ImageMobile {...restProps} />
    </ImageMobileContainer>
  )
}

Portfolio.Item.Content = function PortfolioItemContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}

Portfolio.Item.Title = function PortfolioItemTitle({ children, ...restProps }) {
  const { to } = useContext(ItemContext)

  return (
    <Title {...restProps}>
      <StyledLink to={to}>{children}</StyledLink>
    </Title>
  )
}

Portfolio.Item.Subtitle = function PortfolioItemSubtitle({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Portfolio.Item.Heading = function PortfolioItemHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>
}

Portfolio.Item.Text = function PortfolioItemText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Portfolio.Item.Keywords = function PortfolioItemKeywords({ children, ...restProps }) {
  return <Keywords {...restProps}>{children}</Keywords>
}

Portfolio.Item.Keywords.Keyword = function PortfolioItemKeywordsKeyword({ href, children, ...restProps }) {
  const handleClick = event => {
    event.target.blur()
  }

  return (
    <Keyword {...restProps}>
      <KeywordInner href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>{children}</KeywordInner>
    </Keyword>
  )
}
