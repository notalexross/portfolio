// TODO: add copyright date: new Date().getFullYear()
import React from 'react'
import { Footer } from '../components'
import { SocialContainer } from '../containers'

export default function FooterContainer() {
  return (
    <Footer>
      <SocialContainer />
      <Footer.ScrollAnchor className="fas fa-chevron-circle-up" href="#top"/>
    </Footer>
  )
}