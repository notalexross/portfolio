import React from "react"
import PropTypes from "prop-types"
import { GlobalStyle } from '../styles'
import { ScrollNav } from '.'
import { HeaderContainer, FooterContainer } from '../containers'
import 'normalize.css'

export default function Layout({ children }) {
  return (
    <ScrollNav.ContextProvider>
      <GlobalStyle />
        <HeaderContainer />
        <main>{children}</main>
        <FooterContainer />
    </ScrollNav.ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}