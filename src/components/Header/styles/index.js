import styled from 'styled-components'
import { Link } from 'gatsby'

export const Container = styled.header`
  background-color: var(--clr-header-bg-opaque);
  font-size: 1.1rem;
`

export const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--clr-header-bg-opaque);
  color: var(--clr-header-opaque);
  box-shadow: var(--bs-header);
  z-index: 100;
  user-select: none;
  transition: background-color var(--transition-time-fast),
    opacity var(--transition-time-fast) ease-in-out, color var(--transition-time-fast) ease-in-out;

  ${({ shouldTransition }) => !shouldTransition && `
    &,
    & * {
      transition: none !important;
    }
  `}

  @media (min-width: 700px) {
    padding: 0 var(--min-margin);

    ${({ isTransparent }) => isTransparent && `
      background-color: transparent;
      color: var(--clr-header);
      box-shadow: none;
    `}

    ${({ isHidden }) => isHidden && `
      opacity: 0;
      pointer-events: none;

      & * {
        transition: color var(--transition-time-fast) ease-in-out !important;
        color: #fff0 !important;
      }
    `}

    ${({ isHidden, isTransparent }) => !isHidden &&
      isTransparent && `
      transition:
        opacity var(--transition-time-fast) ease-in-out,
        color var(--transition-time-fast) ease-in-out;
    `}
  }
`

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`

export const Spacer = styled(Inner)`
  visibility: hidden;
`

export const Toggler = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  box-sizing: border-box;
  min-height: 1.4em;
  min-width: 1.45em;
  padding: 0.2em 0.1em;
  border-radius: 0.05em;
  background-color: var(--clr-accent-primary);
  font-size: 32px;
  cursor: pointer;

  & > i {
    display: block;
    opacity: 0.9;
  }

  @media (min-width: 700px) {
    display: none;
  }
`

export const Nav = styled.nav`
  width: 100vw;
  height: 100vh;
  overflow: auto;

  @media (min-width: 700px) {
    width: auto;
    height: auto;
  }
`

export const NavInner = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  min-height: 100%;
  margin: 0;
  padding: 60px 0;
  font-size: 2rem;
  line-height: 1.7;
  list-style: none;

  @media (min-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0.5rem 0;
    font-size: 1em;

    & > *:not(:last-child) {
      margin-right: 1rem;
    }
  }
`

export const Navbar = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  overflow: hidden;

  & > *:last-child {
    justify-self: end;
  }

  & > *:not(${Nav}) {
    visibility: hidden;
    width: 0;
  }

  @media (min-width: 800px) {
    & > *:not(${Nav}) {
      visibility: unset;
      width: unset;
    }
  }

  @media (min-width: 700px) {
    display: grid;
  }
`

export const NavItem = styled.li``

export const StyledLink = styled.span.attrs(({ to }) => ({
  as: to && Link
}))`
  color: unset;
  font-family: var(--ff-primary);
  text-decoration: none;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  .active-path & {
    color: var(--clr-active-link);
  }

  *:not(.active-path) > &:hover,
  *:not(.active-path) > &:focus {
    color: var(--clr-active-link);
    opacity: 0.6;
  }
`
