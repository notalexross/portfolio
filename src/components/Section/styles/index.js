import styled from 'styled-components'

export const Container = styled.section`
  color: var(--clr-primary);
  background-color: var(--clr-secondary);

  font-size: 1.125rem;
`

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 3rem var(--min-margin);

  @media (min-width: 700px) {
    padding: 6rem var(--min-margin);
  }

  @media (min-width: 950px) {
    display: flex;
    flex-direction: row;
    & > * + * {
      margin-left: 3rem;
    }
  }
`

export const Title = styled.h1`
  font-size: var(--fs-section-headings, 2em);
  margin-bottom: 1.25em;
`

export const Content = styled.div`
  width: 100%;
`

export const Text = styled.div`
  line-height: 1.4;
  letter-spacing: 0.02em;
  font-size: 1.2rem;

  & > div > * {
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  & > div > *:first-child {
    margin-top: 0;
  }

  & > div > *:last-child {
    margin-bottom: 0;
  }
  
  & a:hover,
  & a:focus {
    color: var(--clr-accent-secondary);
  }
`

export const Aside = styled.div`
  min-width: 15em;
  margin-top: 2rem;

  & h2 {
    font-size: 2em;
  }

  & h2 > a {
    font-family: var(--ff-primary);
  }

  & ul {
    list-style: none;
    padding: 0;
  }

  & li {
    line-height: 1.3;
  }

  & li > a {
    font-weight: var(--fw-reg);
  }

  @media (min-width: 950px) {
    margin-top: 0;
  }
`