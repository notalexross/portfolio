import styled from 'styled-components'

export const Container = styled.footer`
  position: relative;
  padding: 8rem 0 0;
  background-color: var(--clr-footer-bg);
  color: var(--clr-footer);
  box-shadow: 0 50vh 0 50vh var(--clr-footer-bg);
`

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--min-margin);
  font-size: 1.5rem;

  & ul {
    justify-content: space-around;
    width: 100%;
    max-width: 30rem;
  }
`

export const ScrollAnchor = styled.a`
  display: block;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: unset;
  font-size: 3rem;
  text-decoration: none;
`

export const Copyright = styled.p`
  margin: 3rem 0 2rem;
  opacity: 0.5;
  font-family: var(--ff-primary);
  font-size: 0.8rem;
`
