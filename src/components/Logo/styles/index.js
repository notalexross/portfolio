import styled from 'styled-components'
// import { HashLink } from 'react-router-hash-link'
import { Link } from 'gatsby'

export const Container = styled.div``

export const Inner = styled.span.attrs(({ to }) => ({
  as: to && Link
}))`
  font-family: var(--ff-primary);
  text-decoration: none;
  color: unset;

  letter-spacing: 0.1em;

  font-size: 1.1em;

  &:hover,
  &:focus {
    color: unset;
  }
`