import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, var(--hexagon-width, 9.5em));
  gap: var(--hexagon-gap, 1em);
  justify-content: center;

  font-size: calc(var(--hexagon-scale, 1) * var(--hexagon-fs, 1em));

  padding-right: calc(var(--hexagon-width, 9.5em) / 2 + var(--hexagon-gap, 1em) / 2);
  padding-bottom: calc(var(--hexagon-width, 9.5em) * 0.5773502692 / 2);
`

export const ItemsContainer = styled.div`
  position: relative;
  padding-top: calc(3 * 57.73502692% + var(--hexagon-gap, 1em));

  &:last-of-type {
    ${({ onlyOneChild }) => onlyOneChild && 'padding-top: calc(1.5 * 57.73502692%);'}
  }

  pointer-events: none;
  & > * {
    pointer-events: all;
  }
`

export const Item = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  margin-top: calc(57.73502692% / 2);

  &:nth-child(even) {
    left: calc(50% + var(--hexagon-gap, 1em) / 2);
    margin-top: calc(2 * 57.73502692% + var(--hexagon-gap, 1em));
  }

  user-select: none;
`

export const Anchor = styled.a`
  display: block;
  text-decoration: none;
  color: unset;

  transition: transform var(--transition-time-fast) ease-in-out,
    background-color var(--transition-time-fast) ease-in-out;

  background-color: var(--hexagon-clr-bg, #fff);
  color: var(--hexagon-clr, #000);

  & svg {
    fill: currentColor;
  }

  outline-offset: -1em;

  &:hover,
  &:focus {
    position: relative;
    z-index: 1;
    color: unset;
    // opacity: 0.6;
    transform: scale(1.04);
    transition: none;

    background-color: var(--clr-accent-secondary, #fff);
  }
`

export const Hexagon = styled.div`
  position: relative;
  width: 100%;
  padding-top: 57.73502692%;
  background-color: inherit;
  filter: var(--hexagon-filter, drop-shadow(2px 2px 0.3em #000));

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: inherit;
  }

  &::before {
    transform: rotate(120deg);
  }

  &::after {
    transform: rotate(-120deg);
  }
`

export const HexagonInner = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Logo = styled.div`
  pointer-events: none;
  font-size: var(--hexagon-logo-size, 3em);

  & > * {
    width: 1em;
    height: 1em;
  }
`

export const Title = styled.h2`
  font-size: 1em;

  display: var(--hexagon-title-display, block);
`
