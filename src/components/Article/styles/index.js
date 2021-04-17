import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.article`
  display: grid;
  gap: 0.8rem;
  grid-template-areas:
    'heading'
    'images'
    'keywords'
    'body'
    'link';
  line-height: 1.5;

  @media (min-width: 950px) {
    grid-template-areas:
      'images'
      'keywords'
      'heading'
      'body'
      'link';
  }
`

export const Heading = styled.div`
  grid-area: heading;
`

export const Title = styled.h1`
  margin: 0;
`

export const Subtitle = styled.p`
  margin: 0;
  opacity: 0.8;
  font-size: 0.9em;
`

export const Keywords = styled.ul`
  grid-area: keywords;
  display: flex;
  flex-wrap: wrap;
  margin: 0.3em 0;
  padding: 0;
  font-size: 0.95em;
  list-style: none;
  
  & > :not(:last-child) {
    margin-right: 0.3em;
  }
`

export const Keyword = styled.li`
  margin-bottom: 0.3em;
  line-height: 1.15;
`

export const KeywordInner = styled.a`
  display: inline-block;
  padding: 0.25em 0.6em;
  border-radius: 0.2rem;
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  font-family: var(--ff-primary);
  font-weight: var(--fw-reg);
  transition: background-color var(--transition-time-fast) ease-in-out,
    color var(--transition-time-fast) ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--clr-accent-secondary);
    color: var(--clr-primary);
    transition: none;
  }
`

export const Body = styled.div`
  grid-area: body;

  & p,
  & ul,
  & ol {
    font-family: var(--ff-secondary);
    letter-spacing: 0.005em;
  }

  & a:hover,
  & a:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Links = styled.div`
  grid-area: link;
`

export const Anchor = styled.a`
  &:hover,
  &:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Images = styled.a`
  grid-area: images;
  display: grid;
  grid-template-columns: 3.16fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  height: fit-content;
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  padding-top: ${({ mobile }) => (mobile ? 'calc(100% / 0.5625)' : '56.25%')};
  background: var(--clr-tertiary);
  box-shadow: var(--bs-reverse);
`

export const Image = styled(Img)`
  box-shadow: var(--bs-reverse);
`
