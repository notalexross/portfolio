import React, { useEffect, useRef, useState, createContext, useContext, cloneElement } from 'react'
import { useLocation } from '@reach/router'
import { Wrapper } from './styles'

const ScrollNavContext = createContext()

const ScrollNav = {}
export default ScrollNav

ScrollNav.ContextProvider = function ScrollNavContextProvider({ children, ...restProps }) {
  const [ activeElement, setActiveElement ] = useState()
  const activeEntries = useRef([])
  
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeEntries.current = [...activeEntries.current, entry.target]
      } else {
        activeEntries.current = activeEntries.current.filter((activeEntry) => activeEntry !== entry.target)
      }
      setActiveElement(activeEntries.current[0])
    })
  }

  const observerOptions = {
    root: null,
    rootMargin: '-30% 0% -70%'
  }

  const observer = useRef(typeof window !== 'undefined' && new IntersectionObserver(handleIntersect, observerOptions))

  const observe = element => {
    observer.current.observe(element)
  }

  const unobserve = element => {
    activeEntries.current = activeEntries.current.filter(activeEntry => activeEntry !== element)
    observer.current.unobserve(element)
  }

  useEffect(() => {
    const observerCurrent = observer.current
    return () => observerCurrent.disconnect()
  }, [])

  return (
    <ScrollNavContext.Provider value={{ observe, unobserve, activeElement }} {...restProps}>
      {children}
    </ScrollNavContext.Provider>
  )
}





ScrollNav.Wrapper = function ScrollNavWrapper({ id, children, ...restProps }) {
  const { observe, unobserve } = useContext(ScrollNavContext)
  const wrapperRef = useRef()

  useEffect(() => {
    const ref = wrapperRef.current
    observe(ref)
    return () => unobserve(ref)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Wrapper ref={wrapperRef} id={id} {...restProps}>
      {children}
    </Wrapper>
  )
}

ScrollNav.ActiveClassAssigner = function ScrollNavLink({ activePath, children, ...restProps }) {
  const { pathname } = useLocation()
  const { activeElement } = useContext(ScrollNavContext)

  const [path, hash] = activePath.split('#')
  const isActive = pathname === path && activeElement?.id === hash

  const newChildren = React.Children.map(children, (child) => {
    let className = child.props.className || ''
    if (isActive) {
      if (className) className += ' '
      className += 'active-path'
    }
    return cloneElement(child, { className })
  })

  return <>{newChildren}</>
}
