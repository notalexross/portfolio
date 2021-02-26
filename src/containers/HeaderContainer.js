import React from 'react'
import { Header, Logo, Nav, Navbar, ScrollNav } from '../components'
import { SocialContainer } from '.'

export default function HeaderContainer() {
  return (
    <Header>
      <Navbar>
        <Logo to="/#home">DRoss</Logo>
        <Nav>
          <ScrollNav.ActiveClassAssigner activePath="/#home">
            <Nav.Item to="/#home">Home</Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#about">
            <Nav.Item to="/#about">About</Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#skills">
            <Nav.Item to="/#skills">Skills</Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#work">
            <Nav.Item to="/#work">Work</Nav.Item>
          </ScrollNav.ActiveClassAssigner>
          <ScrollNav.ActiveClassAssigner activePath="/#contact">
            <Nav.Item to="/#contact">Contact</Nav.Item>
          </ScrollNav.ActiveClassAssigner>
        </Nav>
        <SocialContainer />
      </Navbar>
    </Header>
  )
}
