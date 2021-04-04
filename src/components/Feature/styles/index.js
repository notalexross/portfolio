import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

export const Container = styled(BackgroundImage)`
  box-sizing: border-box;

  background-blend-mode: var(--bbm-feature);
`

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--min-margin);

  // min-height: 100vh;
  // min-height: -webkit-fill-available;
  min-height: var(--window-height, 100vh);

  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`

export const Content = styled.div`
  padding: 5rem 1rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`

export const Title = styled.h1`
  color: var(--clr-feature-title);
  font-weight: var(--fw-bold);
  font-size: var(--fs-feature-title);
  letter-spacing: 0.02em;
  margin-bottom: 0.2em;

  text-shadow: var(--text-shadow);
`

export const Subtitle = styled.div`
  color: var(--clr-feature-subtitle);
  font-size: var(--fs-feature-subtitle);
  line-height: 1.5;
  margin: 0;

  text-shadow: var(--text-shadow);

  & em {
    color: var(--clr-primary);
    font-style: normal;
  }
`

export const ScrollAnchor = styled.a`
  text-decoration: none;
  color: unset;

  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3rem;
`
