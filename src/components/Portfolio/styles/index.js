import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Container = styled.div``

export const Title = styled.h1`
  margin-bottom: 0.2em;

  & a {
    font-family: var(--ff-primary);
  }
`

export const Subtitle = styled.p`
  opacity: 0.8;
  font-size: 0.9em;
  margin: 0 0 1.5rem;
`

export const Content = styled.div`
  grid-area: content;
`

export const Images = styled.div.attrs(({ to }) => ({
  as: to && Link
}))`
  grid-area: images;
  height: fit-content;

  perspective: 1000px;
  perspective-origin: var(--portfolio-images-perspective-origin);

  // transition: transform var(--transition-time-fast) ease-in-out;
  // &:hover {
  //   --portfolio-images-transform: none;
  //   transform: scale(0.85);
  //   transition: transform var(--transition-time-fast) ease-in-out;
  // }
`

export const ImagesInner = styled.div`
  position: relative;
  height: fit-content;

  transform-style: preserve-3d;

  transform-origin: var(--portfolio-images-transform-origin);
  transform: var(--portfolio-images-transform);

  transition: transform var(--transition-time-fast) ease-in-out;
`

export const ImageMobileContainer = styled.div`
  position: relative;
  max-width: 25%;
  width: 100%;

  position: absolute;
  bottom: 0;
  right: 0;
  left: var(--portfolio-images-mobile-position-left);

  --mobile-image-offset-y: 50%; // relative to width of mobile image

  transform-style: inherit; // Required in firefox for some reason.
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
  ${({ mobile }) => mobile ? mixinMobile : mixinDesktop}
  padding-top: ${({ mobile }) => mobile ? 'calc(100% / 0.5625)' : '56.25%'};
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
`

export const Keywords = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  margin-bottom: 0;
  flex-wrap: wrap;
  font-size: 0.9em;

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

  // background-color: var(--clr-accent-primary);
  // color: var(--clr-dark);
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

// TODO: Refactor this to be less complicated
export const Item = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'images content'
    'images content';
  grid-column-gap: 1rem;

  &:nth-child(even) {
    grid-template-areas:
      'content images'
      'content images';
  }

  position: relative;

  &:not(:last-child) {
    margin-bottom: 12rem;
    &::after {
      content: '';
      position: absolute;
      bottom: -6rem;
      left: 50%;
      transform: translateX(-50%);
      height: 1px;
      width: 100%;
      background-color: var(--clr-primary);
      opacity: 0.2;
    }
  }

  --portfolio-images-perspective-origin: 25% 50%;
  --portfolio-images-transform-origin: 0 0 0;
  --portfolio-images-transform: rotateY(15deg);
  --portfolio-image-desktop-bs: var(--bs);
  &:nth-child(even) {
    --portfolio-images-perspective-origin: 75% 50%;
    --portfolio-images-transform-origin: 100% 0 0;
    --portfolio-images-transform: rotateY(-15deg);
    --portfolio-images-mobile-position-left: 0;
    --portfolio-image-desktop-bs: var(--bs-reverse);
  }

  // TODO: min-width, not max-width;
  // maybe move to global styles if can;

  @media (max-width: 800px) {
    &,
    &:nth-child(even) {
      grid-template-areas:
        'images images'
        'content content';
      --portfolio-images-transform: none;
      --portfolio-image-desktop-bs: var(--bs-reverse);

      & ${Images} {
        --mobile-offset-right: 3rem;
        --mobile-offset-bottom: 2rem;

        perspective: unset;
        margin-bottom: 2rem;
        padding-right: var(--mobile-offset-right);
        padding-bottom: var(--mobile-offset-bottom);

        &:hover {
          transform: none;
        }

        & ${ImageMobileContainer} {
          left: unset;
          right: calc(-1 * var(--mobile-offset-right));
          bottom: calc(-1 * var(--mobile-offset-bottom));
        }
      }
    }
  }
`
