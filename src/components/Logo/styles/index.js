import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.div``

export const Inner = styled.span.attrs(({ to }) => ({
  as: to && Link
}))`
  color: unset;
  font-family: var(--ff-primary);
  font-size: 1.1em;
  letter-spacing: 0.1em;
  text-decoration: none;

  &:hover,
  &:focus {
    color: unset;
  }
`
