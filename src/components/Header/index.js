import React, { useEffect, useState, createContext, useContext } from 'react'
import { useLocation } from '@reach/router'
import {
  Container,
  Outer,
  Inner,
  Spacer,
  Toggler,
  Navbar,
  Nav,
  NavInner,
  NavItem,
  StyledLink
} from './styles'

const TogglerContext = createContext()

export default function Header({ children, ...restProps }) {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [shouldTransition, setShouldTransition] = useState(false)
  const [isOpaque, setIsOpaque] = useState(pathname !== '/')
  const [isVisible, setIsVisible] = useState(pathname !== '/')

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(
        pathname !== '/' ||
          window.scrollY <= 50 ||
          window.scrollY >= document.documentElement.clientHeight - 1
      )
      setIsOpaque(pathname !== '/' || window.scrollY >= document.documentElement.clientHeight - 1)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setShouldTransition(true), 0)
  }, [])

  return (
    <TogglerContext.Provider value={{ isOpen, setIsOpen, isOpaque }}>
      <Container>
        <Outer
          isTransparent={!isOpaque}
          isHidden={!isVisible}
          shouldTransition={shouldTransition}
          {...restProps}
        >
          <Inner>{children}</Inner>
        </Outer>
        {pathname !== '/' ? <Spacer>{children}</Spacer> : null}
      </Container>
    </TogglerContext.Provider>
  )
}

Header.Toggler = function HeaderToggler({ ...restProps }) {
  const { setIsOpen } = useContext(TogglerContext)
  const handleClick = () => {
    setIsOpen(isOpen => !isOpen)
  }

  return (
    <Toggler onClick={handleClick} {...restProps}>
      <i className="fas fa-bars fa-fw" />
    </Toggler>
  )
}

Header.Navbar = function HeaderNavbar({ children, ...restProps }) {
  const { isOpen } = useContext(TogglerContext)

  return (
    <Navbar isOpen={isOpen} {...restProps}>
      {children}
    </Navbar>
  )
}

Header.Navbar.Nav = function HeaderNavbarNav({ children, ...restProps }) {
  return (
    <Nav {...restProps}>
      <NavInner>{children}</NavInner>
    </Nav>
  )
}

Header.Navbar.Nav.Item = function HeaderNavbarNavItem({
  onClick = () => {},
  to,
  children,
  ...restProps
}) {
  const { setIsOpen, isOpaque } = useContext(TogglerContext)

  const handleClick = event => {
    onClick()
    setIsOpen(false)
    event.target.blur()
  }

  return (
    <NavItem {...restProps}>
      <StyledLink $isTransparent={!isOpaque} to={to} onClick={handleClick}>
        {children}
      </StyledLink>
    </NavItem>
  )
}
