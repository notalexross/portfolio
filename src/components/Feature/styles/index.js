import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const Container = styled(BackgroundImage)`
  box-sizing: border-box;
  background-blend-mode: var(--bbm-feature);
`

export const Inner = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  max-width: var(--max-width);
  min-height: var(--window-height, 100vh);
  margin: 0 auto;
  padding: 0 var(--min-margin);
`

export const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 5rem 1rem;
  text-align: center;
`

export const Title = styled.h1`
  margin-bottom: 0.2em;
  color: var(--clr-feature-title);
  font-weight: var(--fw-bold);
  font-size: var(--fs-feature-title);
  letter-spacing: 0.02em;
  text-shadow: var(--text-shadow);
`

export const Subtitle = styled.div`
  margin: 0;
  color: var(--clr-feature-subtitle);
  font-size: var(--fs-feature-subtitle);
  line-height: 1.5;
  text-shadow: var(--text-shadow);

  & em {
    color: var(--clr-primary);
    font-style: normal;
  }
`

export const ScrollAnchor = styled.a`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  color: unset;
  font-size: 3rem;
  text-decoration: none;
`
