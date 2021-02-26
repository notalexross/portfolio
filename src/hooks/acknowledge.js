import { useEffect, useRef } from 'react'

export default function useAcknowledge(credit) {
  const logoRef = useRef()

  useEffect(() => {
    if (!credit) return
    
    const comment = document.createComment(credit)
    // selfRef is used with gatsby-background-image BackgroundImage
    const ref = logoRef.current.selfRef || logoRef.current
    ref.prepend(comment)
  }, [credit])

  return logoRef
}