import React from 'react'
import { Header, Logo, ScrollNav } from '../components'
import SocialContainer from './SocialContainer'

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Navbar>
        <Logo to="/#home">DRoss</Logo>
        <Header.Navbar.Nav>
          <ScrollNav.ActiveClassAssigner activePath="/#home">
            <Header.Navbar.Nav.Item to="/#home">Home</Header.Navbar.Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#about">
            <Header.Navbar.Nav.Item to="/#about">About</Header.Navbar.Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#skills">
            <Header.Navbar.Nav.Item to="/#skills">Skills</Header.Navbar.Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#work">
            <Header.Navbar.Nav.Item to="/#work">Work</Header.Navbar.Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#contact">
            <Header.Navbar.Nav.Item to="/#contact">Contact</Header.Navbar.Nav.Item>
          </ScrollNav.ActiveClassAssigner>
        </Header.Navbar.Nav>
        <SocialContainer />
      </Header.Navbar>
      <Header.Toggler />
    </Header>
  )
}
