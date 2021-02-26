import styled from 'styled-components'

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;

  & > * + * {
    margin-left: 0.5em;
  }
`

export const Item = styled.li``

export const Anchor = styled.a`
  text-decoration: none;
  color: unset;
  transition: color var(--transition-time-fast) ease-in-out, opacity var(--transition-time-fast) ease-in-out;

  &:hover,
  &:focus {
    color: var(--clr-accent-secondary);
    transition: unset;
  }
`

export const Icon = styled.i`
  font-size: 1.5em;
  // width: 1em;
`