import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Container = styled.div`
  font-size: 1rem;

  --mobile-image-offset-y: 50%;
  --mobile-offset-right: 3rem;
  --mobile-offset-bottom: 2rem;

  @media (min-width: 800px) {
    --mobile-offset-right: 0rem;
    --mobile-offset-bottom: 0rem;
  }
`

export const Title = styled.h1`
  & a {
    font-family: var(--ff-primary);
  }
`

export const Subtitle = styled.p`
  margin: 0 0 0.2rem;
  opacity: 0.8;
  font-size: 0.9em;
`

export const Content = styled.div`
  grid-area: content;
`

export const Images = styled.div.attrs(({ to }) => ({
  as: to && Link
}))`
  grid-area: images;
  height: fit-content;
  padding-right: var(--mobile-offset-right);
  padding-bottom: var(--mobile-offset-bottom);

  @media (min-width: 800px) {
    perspective: 1000px;
    perspective-origin: var(--portfolio-images-perspective-origin);
  }
`

export const ImagesInner = styled.div`
  position: relative;
  height: fit-content;

  @media (min-width: 800px) {
    transform-style: preserve-3d;
    transform-origin: var(--portfolio-images-transform-origin);
    transform: var(--portfolio-images-transform);
    transition: transform var(--transition-time-fast) ease-in-out;
  }
`

export const ImageMobileContainer = styled.div`
  position: absolute;
  bottom: calc(-1 * var(--mobile-offset-bottom));
  right: calc(-1 * var(--mobile-offset-right));
  width: 100%;
  max-width: 25%;

  @media (min-width: 800px) {
    transform-style: inherit; // Required in firefox for unknown reason
    left: var(--portfolio-images-mobile-position-left);
  }
`

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    filter: blur(6px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    transform-origin: bottom;
    transform: rotateX(-90deg);
    width: 100%;
    padding-top: var(--mobile-image-offset-y);
    background-color: black;
    opacity: 0.1;
    filter: blur(5px);
  }
`

const mixinMobile = css`
  transform: rotateY(-90deg) translateX(var(--mobile-image-offset-y)) rotateY(90deg);
  box-shadow: 0 0 0 1px #0002;
`

const mixinDesktop = css`
  box-shadow: var(--portfolio-image-desktop-bs), 0 0 0 1px #0002;
`

export const ImagePlaceholder = styled.div`
  ${({ mobile }) => (mobile ? mixinMobile : mixinDesktop)}
  padding-top: ${({ mobile }) => (mobile ? 'calc(100% / 0.5625)' : '56.25%')};
  background-color: var(--clr-tertiary);
`

export const ImageMobile = styled(Img)`
  ${mixinMobile}
`

export const ImageDesktop = styled(Img)`
  ${mixinDesktop}
`

export const StyledLink = styled.span.attrs(({ to }) => ({
  as: to && Link
}))`
  color: unset;
  text-decoration: none;
`

export const Heading = styled.h2`
  margin-bottom: 1em;
`

export const Text = styled.div`
  margin-top: 0.8rem;
  font-size: 1.125em;
  line-height: 1.2;
  letter-spacing: 0.005em;

  & > p {
    margin-top: 0;
  }

  & a:hover,
  & a:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Keywords = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  padding: 0;
  font-size: 0.95em;
  list-style: none;

  & > :not(:last-child) {
    margin-right: 0.3em;
  }
`

export const Keyword = styled.li`
  margin-bottom: 0.3em;
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

export const Item = styled.article`
  display: grid;
  position: relative;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'images images'
    'content content';

  --portfolio-image-desktop-bs: var(--bs-reverse);
  --portfolio-images-perspective-origin: 25% 50%;
  --portfolio-images-transform-origin: 0 0 0;

  &:not(:last-child) {
    margin-bottom: 4rem;
    padding-bottom: 4rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 1px;
      background-color: var(--clr-primary);
      opacity: 0.2;
    }
  }

  &:nth-child(even) {
    --portfolio-images-perspective-origin: 75% 50%;
    --portfolio-images-transform-origin: 100% 0 0;
  }

  @media (min-width: 700px) {
    &:not(:last-child) {
      padding-bottom: 6rem;
      margin-bottom: 6rem;
    }
  }

  @media (min-width: 800px) {
    grid-template-areas: 'images content';
    --portfolio-images-transform: rotateY(15deg);
    --portfolio-images-mobile-position-left: auto;

    &:nth-child(even) {
      grid-template-areas: 'content images';
      --portfolio-images-transform: rotateY(-15deg);
      --portfolio-images-mobile-position-left: 0;
    }

    &:nth-child(odd) {
      --portfolio-image-desktop-bs: var(--bs);
    }
  }
`
