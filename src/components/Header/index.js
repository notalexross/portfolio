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

  const isHomePage = pathname === '/'

  const [isOpen, setIsOpen] = useState(false)
  const [shouldTransition, setShouldTransition] = useState(false)
  const [isOpaque, setIsOpaque] = useState(!isHomePage)
  const [isVisible, setIsVisible] = useState(!isHomePage)

  useEffect(() => {
    const handleScroll = () => {
      const isOverHeader = window.scrollY <= 50
      const isOverFeature = isHomePage && window.scrollY < document.documentElement.clientHeight - 1

      setIsVisible(isOverHeader || !isOverFeature)
      setIsOpaque(!isOverFeature)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

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
        {!isHomePage && <Spacer>{children}</Spacer>}
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
  children,
  to,
  onClick = () => {},
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
