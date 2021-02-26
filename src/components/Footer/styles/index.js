import styled from 'styled-components'

export const Container = styled.footer`
  background-color: var(--clr-footer-bg);
  color: var(--clr-footer);
  padding: 8rem 0 4rem;

  position: relative;

  box-shadow: 0 50vh 0 50vh var(--clr-footer-bg);
`

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--min-margin);

  display: flex;
  justify-content: center;

  & ul {
    justify-content: space-around;
    width: 100%;
    max-width: 30rem;
  }

  font-size: 1.5rem;
`

export const ScrollAnchor = styled.a`
  text-decoration: none;
  color: unset;

  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
  display: block;
`