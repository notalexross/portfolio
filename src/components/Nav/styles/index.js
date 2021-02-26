import styled from 'styled-components'
// import { HashLink } from "react-router-hash-link"
import { Link } from 'gatsby';

export const Container = styled.nav``

export const Inner = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  line-height: 1.7;

  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`

export const Item = styled.li``

export const StyledLink = styled.span.attrs(({ to }) => ({
  as: to && Link,
}))`
  font-family: var(--ff-primary);
  text-decoration: none;
  color: unset;

  text-transform: uppercase;
  letter-spacing: 0.08em;

  .active-path & {
    color: var(--clr-active-link);
  }

  .opaque .active-path & {
    color: var(--clr-active-link-opaque);
  }
  

  *:not(.active-path) > &:hover,
  *:not(.active-path) > &:focus {
    opacity: 0.6;
    color: var(--clr-active-link);
  }
`
