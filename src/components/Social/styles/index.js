import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;

  & > * + * {
    margin-left: 0.5em;
  }
`

export const Item = styled.li``

export const Anchor = styled.a`
  color: unset;
  text-decoration: none;
  transition: color var(--transition-time-fast) ease-in-out;

  &:hover,
  &:focus {
    color: var(--clr-accent-secondary);
    transition: unset;
  }
`

export const Icon = styled.i`
  font-size: 1.5em;
`
