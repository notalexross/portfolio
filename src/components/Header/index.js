import React, { useEffect, useRef } from 'react'
import { useLocation } from '@reach/router'
import { Container, Outer, Inner, Spacer } from './styles'

export default function Header({ children, ...restProps }) {
  const headerRef = useRef()
  const { pathname } = useLocation()

  useEffect(() => {
    const headerElement = headerRef.current

    if (pathname !== '/') {
      headerElement.classList.add('opaque')
      return
    }

    const handleScroll = () => {
      if (window.scrollY <= 50) {
        headerElement.classList.remove('opaque')
        headerElement.classList.remove('hidden')
      } else if (window.scrollY < document.documentElement.clientHeight - 1) {
        headerElement.classList.remove('opaque')
        headerElement.classList.add('hidden')
      } else {
        headerElement.classList.add('opaque')
        headerElement.classList.remove('hidden')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  return (
    <Container>
      <Outer ref={headerRef} {...restProps}>
        <Inner>{children}</Inner>
      </Outer>
      {pathname !== '/' ? <Spacer>{children}</Spacer> : null}
    </Container>
  )
}
