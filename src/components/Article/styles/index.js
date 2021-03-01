import styled from 'styled-components'
import Img from 'gatsby-image'

export const Container = styled.article``

export const Title = styled.h1`
  margin-bottom: 0.2em;
`

export const Subtitle = styled.p`
  margin: 0 0 1.5em;
  opacity: 0.8;
  font-size: 0.9em;
`

export const Keywords = styled.div``

export const Body = styled.div`
  margin-bottom: 1.5rem;

  line-height: 1.2;

  & p,
  & ul,
  & ol {
    letter-spacing: 0.005em;
    font-family: var(--ff-secondary);
  }
`

export const Link = styled.a`
  &:hover,
  &:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Images = styled.a`
  // max-width: 800px;
  // height: fit-content;
  // display: flex;
  display: grid;
  grid-template-columns: 3.16fr 1fr;
  grid-gap: 1rem;
  margin: 0 auto 5rem;
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