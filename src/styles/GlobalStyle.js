import React, { useState, useEffect, forwardRef } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --window-height: ${({ windowHeight }) => windowHeight};
    --max-width: 1000px;
    --min-margin: 1rem;
    --clr-dark: #262626;
    --bs: -0.25rem -0.25rem 0.75rem rgba(0,0,0,.25), -0.125rem -0.125rem 0.25rem rgba(0,0,0,.15);
    --bs-reverse: 0.25rem 0.25rem 0.75rem rgba(0,0,0,.25), 0.125rem 0.125rem 0.25rem rgba(0,0,0,.15);
    --fs-root: 15px;
    --fs-section-headings: 2.5rem;
    --fs-feature-title: 3em;
    --fs-feature-subtitle: 1.2em;
    --fw-reg: 400;
    --fw-bold: 800;
    --ff-primary: 'Open Sans', sans-serif;
    --ff-secondary: 'Source Serif Pro', serif;
    --transition-time-fast: 0.2s;

    @media (min-width: 700px) {
      --min-margin: 1.5rem;
      --fs-root: 16px;
      --fs-feature-title: 4em;
      --fs-feature-subtitle: 1.5em;
    }

    --hexagon-fs: 0.7rem;
    --hexagon-scale: 1; // changes with media queries
    --hexagon-width: 8em;
    --hexagon-gap: 0.75em;
    --hexagon-logo-size: 3.8em;
    --hexagon-title-display: none;
    --hexagon-clr: var(--clr-dark);
    --hexagon-clr-bg: white;
    --hexagon-filter: drop-shadow(2px 2px 0.3em #000);

    @media (min-width: 500px) {
      --hexagon-scale: 1.18;
    }
  }

  body.light-theme {
    --clr-1: white; // don't use this directly
    --clr-2: #0d253f; // don't use this directly
    --clr-primary: var(--clr-1);
    --clr-secondary: var(--clr-2);
    --clr-tertiary: #d1f5ff;
    --clr-accent-primary: #ff9300;
    --clr-accent-secondary: #01b4e4;
    --clr-error: #cc0000;
    --bg-feature-gradient: radial-gradient(circle, #0d253f88 0%, #0d253f 100%);
    --bbm-feature: multiply;
    --clr-feature-title: var(--clr-primary);
    --clr-feature-subtitle: #fffa;
    --clr-header: var(--clr-primary); // when at top of page
    --clr-header-opaque: var(--clr-header);
    --clr-header-bg-opaque: var(--clr-secondary);
    --bs-header: 0 3px 8px #0004;
    --clr-active-link: var(--clr-accent-primary); // when at top of page
    --clr-footer: var(--clr-primary);
    --clr-footer-bg: var(--clr-secondary);
    --text-shadow: 0.05em 0.05em 0.05em #000a;
    --hexagon-clr: var(--clr-tertiary);
    --hexagon-clr-bg: var(--clr-secondary);
  }

  html {
    font-size: var(--fs-root);
  }

  body {
    margin: 0;
    background-color: var(--clr-secondary);
    color: var(--clr-primary);
    font-family: var(--ff-primary);
    font-weight: var(--fw-reg);
  }

  h1, h2, h3, h4 {
    margin: 0;
  }

  p {
    font-family: var(--ff-secondary);
  }

  a {
    color: unset;
    font-family: var(--ff-secondary);
    font-weight: var(--fw-bold);
    text-decoration: none;
    transition: color var(--transition-time-fast) ease-in-out, opacity var(--transition-time-fast) ease-in-out;

    &:hover,
    &:focus {
      color: var(--clr-accent-primary);
      transition: unset;
    }
  }

  .inverted {
    --clr-primary: var(--clr-2);
    --clr-secondary: var(--clr-1);
  }

  .flex-container {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;

    & > *:not(:last-child) {
      margin-right: 0.15em;
    }
  }
`

const GlobalStyleWrapper = forwardRef(({ ...restProps }, ref) => {
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' && `${document.documentElement.clientHeight}px`
  )

  useEffect(() => {
    const handleResize = () => setWindowHeight(`${document.documentElement.clientHeight}px`)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <GlobalStyle windowHeight={windowHeight} ref={ref} {...restProps} />
})

export default GlobalStyleWrapper
