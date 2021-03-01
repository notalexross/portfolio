import React, { useEffect, useState } from 'react'
import { useLocation } from '@reach/router'
import { Container, Outer, Inner, Spacer } from './styles'

const shouldBeVisible = () => {
  return (
    window.scrollY <= 50 ||
    window.scrollY >= document.documentElement.clientHeight - 1
  )
}

const shouldBeOpaque = () => {
  return window.scrollY >= document.documentElement.clientHeight - 1
}

export default function Header({ children, ...restProps }) {
  const { pathname } = useLocation()
  const [ shouldTransition, setShouldTransition ] = useState(false)
  const [ isOpaque, setIsOpaque ] = useState(pathname !== '/')
  const [ isVisible, setIsVisible ] = useState(pathname !== '/')

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(pathname !== '/' || shouldBeVisible)
      setIsOpaque(pathname !== '/' || shouldBeOpaque)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  useEffect(() => {
    setTimeout(() => setShouldTransition(true), 0)
  }, [])

  return (
    <Container>
      <Outer
        isOpaque={isOpaque}
        isVisible={isVisible}
        shouldTransition={shouldTransition}
        {...restProps}
      >
        <Inner>{children}</Inner>
      </Outer>
      {pathname !== '/' ? <Spacer>{children}</Spacer> : null}
    </Container>
  )
}
