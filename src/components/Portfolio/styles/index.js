import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Container = styled.div`
  font-size: 1rem;

  --mobile-image-offset-y: 50%; // relative to width of mobile image
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
  opacity: 0.8;
  font-size: 0.9em;
  margin: 0 0 0.2rem;
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
  width: 100%;
  max-width: 25%;

  bottom: calc(-1 * var(--mobile-offset-bottom));
  right: calc(-1 * var(--mobile-offset-right));

  @media (min-width: 800px) {
    transform-style: inherit; // Required in firefox for some reason.
    left: var(--portfolio-images-mobile-position-left);
  }
`

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

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
    width: 100%;
    padding-top: var(--mobile-image-offset-y);
    transform-origin: bottom;
    transform: rotateX(-90deg);

    background-color: black;
    opacity: 0.1;
    filter: blur(5px);
  }
`

const mixinMobile = css`
  box-shadow: 0 0 0 1px #0002;
  transform: rotateY(-90deg) translateX(var(--mobile-image-offset-y)) rotateY(90deg);
`

const mixinDesktop = css`
  box-shadow: var(--portfolio-image-desktop-bs), 0 0 0 1px #0002;
`

export const ImagePlaceholder = styled.div`
  ${({ mobile }) => (mobile ? mixinMobile : mixinDesktop)}
  padding-top: ${({ mobile }) => (mobile ? 'calc(100% / 0.5625)' : '56.25%')};
  background: var(--clr-tertiary);
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
  & > p {
    margin-top: 0;
  }

  line-height: 1.2;
  letter-spacing: 0.005em;
  font-size: 1.125em;

  & a:hover,
  & a:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Keywords = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 0;
  flex-wrap: wrap;
  font-size: 0.95em;

  & > :not(:last-child) {
    margin-right: 0.3em;
  }
`

export const Keyword = styled.li`
  margin-bottom: 0.3em;
`

export const KeywordInner = styled.a`
  display: inline-block;
  font-family: var(--ff-primary);
  font-weight: var(--fw-reg);
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  border-radius: 0.2rem;
  padding: 0.25em 0.6em;
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
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 1rem;

  &:not(:last-child) {
    padding-bottom: 4rem;
    margin-bottom: 4rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      width: 100%;
      background-color: var(--clr-primary);
      opacity: 0.2;
    }
  }

  grid-template-areas:
    'images images'
    'content content';

  --portfolio-image-desktop-bs: var(--bs-reverse);
  --portfolio-images-perspective-origin: 25% 50%;
  --portfolio-images-transform-origin: 0 0 0;

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
