import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.article`
  line-height: 1.5;

  display: grid;
  gap: 0.8rem;
  grid-template-areas:
    'title'
    'subtitle'
    'images'
    'keywords'
    'body'
    'link';

  @media (min-width: 950px) {
  grid-template-areas:
    'images'
    'keywords'
    'title'
    'subtitle'
    'body'
    'link';
  }
`

export const Title = styled.h1`
  grid-area: title;
  margin: 0;
  // margin-bottom: 0.2em;
`

export const Subtitle = styled.p`
  grid-area: subtitle;
  margin: 0;
  // margin: 0 0 1.5em;
  opacity: 0.8;
  font-size: 0.9em;
`

export const Keywords = styled.ul`
  grid-area: keywords;
  list-style: none;
  padding: 0;
  display: flex;
  margin: 0;
  margin-top: 0.3em;
  flex-wrap: wrap;
  font-size: 0.95em;

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
  font-family: var(--ff-primary);
  font-weight: var(--fw-reg);
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  border-radius: 0.2rem;
  padding: 0.25em 0.6em;
  transition: background-color var(--transition-time-fast) ease-in-out, color var(--transition-time-fast) ease-in-out;

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
    letter-spacing: 0.005em;
    font-family: var(--ff-secondary);
  }

  & a:hover,
  & a:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Link = styled.a`
  grid-area: link;
  &:hover,
  &:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Images = styled.a`
  grid-area: images;
  // max-width: 800px;
  height: fit-content;
  width: 100%;
  display: grid;
  grid-template-columns: 3.16fr 1fr;
  grid-gap: 1rem;
  // margin: 0 auto 5rem;
`

export const ImagePlaceholder = styled.div`
  width: 100%;
  padding-top: ${({ mobile }) => mobile ? 'calc(100% / 0.5625)' : '56.25%'};
  background: var(--clr-tertiary);
  box-shadow: var(--bs-reverse);
`

export const Image = styled(Img)`
  box-shadow: var(--bs-reverse);
`