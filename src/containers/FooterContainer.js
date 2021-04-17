import React from 'react'
import { Footer } from '../components'
import SocialContainer from './SocialContainer'

export default function FooterContainer() {
  return (
    <Footer>
      <SocialContainer />
      <Footer.ScrollAnchor className="fas fa-chevron-circle-up" href="#top" />
      <Footer.Copyright>
        Copyright &copy;
        {new Date().getFullYear()}
        {' '}
        Daniel Ross
      </Footer.Copyright>
    </Footer>
  )
}
