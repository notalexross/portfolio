import { createGlobalStyle } from 'styled-components'
import React from 'react'

const GlobalStyle = createGlobalStyle`
  :root {
    --window-height: ${({ windowHeight }) => windowHeight};

    --fs-root: 15px;
    --fw-reg: 400;
    --fw-bold: 800;
    --ff-primary: 'Open Sans', sans-serif;
    --ff-secondary: 'Source Serif Pro', serif;

    --fs-section-headings: 2.5rem;

    --max-width: 1000px;
    --min-margin: 1rem;
    --bs: -0.25rem -0.25rem 0.75rem rgba(0,0,0,.25), -0.125rem -0.125rem 0.25rem rgba(0,0,0,.15);
    --bs-reverse: 0.25rem 0.25rem 0.75rem rgba(0,0,0,.25), 0.125rem 0.125rem 0.25rem rgba(0,0,0,.15);

    --clr-dark: #262626;

    --transition-time-fast: 0.2s;

    --fs-feature-title: 3em;
    --fs-feature-subtitle: 1.2em;

    --hexagon-fs: 0.7rem; // 0.85rem
    --hexagon-scale: 1; // changes with media queries
    --hexagon-width: 8em;
    --hexagon-gap: 0.75em;
    --hexagon-logo-size: 3.8em; // 2em
    --hexagon-title-display: none; // none/block
    --hexagon-clr: var(--clr-dark);
    --hexagon-clr-bg: white;
    --hexagon-filter: drop-shadow(2px 2px 0.3em #000);
  }


  // body.dark-theme {
  //   --clr-1: white; // don't use this directly
  //   --clr-2: var(--clr-dark); // don't use this directly

  //   --clr-primary: var(--clr-1);
  //   --clr-secondary: var(--clr-2);
  //   --clr-accent-primary: #ff9300;
  //   --clr-accent-secondary: #ffd700;
  //   --clr-tertiary: #fff6e8;
  //   --clr-error: #cc0000;

  //   // --bg-feature-gradient: radial-gradient(circle, rgba(103,103,103,1) 0%, rgba(24,24,24,1) 53%);
  //   --bg-feature-gradient: radial-gradient(circle, rgba(103,103,103,0.8) 0%, rgba(0,0,0,0.8) 100%);
  //   --bbm-feature: multiply; // multiply?
  //   --clr-feature-title: white;
  //   --clr-feature-subtitle: #fffa;

  //   --clr-header: white; // when at top of page
  //   --clr-header-opaque: white;
  //   --clr-header-bg-opaque: #191919;
  //   --bs-header: 0 3px 8px #0004;

  //   --clr-active-link: #ff9300; // when at top of page
  //   --clr-active-link-opaque: #ff9300; // when at top of page

  //   --clr-footer: white;
  //   --clr-footer-bg: #191919;

  //   --text-shadow: 0.05em 0.05em 0.05em #000a; // TODO: change this
  // }

  body.light-theme {
    --clr-1: white; // don't use this directly
    --clr-2: #0d253f; // don't use this directly

    --clr-primary: var(--clr-1);
    --clr-secondary: var(--clr-2);
    --clr-tertiary: #d1f5ff; // #01b4e4 // #90cea1
    --clr-accent-primary: #ff9300;
    --clr-accent-secondary: #01b4e4;
    --clr-error: #cc0000;

    // --bg-feature-gradient: radial-gradient(circle, rgba(103,103,103,1) 0%, rgba(24,24,24,1) 53%);
    // --bg-feature-gradient: radial-gradient(circle, rgba(103,103,103,0.8) 0%, rgba(0,0,0,0.8) 100%);
    // --bg-feature-gradient: radial-gradient(circle, rgba(150,150,150,1) 0%, rgba(0,0,0,1) 100%);
    --bg-feature-gradient: radial-gradient(circle, #0d253f88 0%, #0d253f 100%);
    // --bg-feature-gradient: radial-gradient(circle, #378da4 0%, #050f19 100%);
    --bbm-feature: multiply; // multiply?
    --clr-feature-title: var(--clr-primary);
    --clr-feature-subtitle: #fffa;

    --clr-header: var(--clr-primary); // when at top of page
    --clr-header-opaque: var(--clr-header);
    --clr-header-bg-opaque: var(--clr-secondary);
    --bs-header: 0 3px 8px #0004;

    --clr-active-link: var(--clr-accent-primary); // when at top of page
    --clr-active-link-opaque: var(--clr-accent-primary); // when not at top of page

    --clr-footer: var(--clr-primary);
    --clr-footer-bg: var(--clr-secondary);

    --text-shadow: 0.05em 0.05em 0.05em #000a; // TODO: change this

    --hexagon-clr: var(--clr-tertiary);
    --hexagon-clr-bg: var(--clr-secondary);
  }

  //////////////////////////

  @media ( min-width: 700px) {
    :root {
      --fs-root: 16px;
      --fs-feature-title: 4em;
      --fs-feature-subtitle: 1.5em;
    }
  }

  @media ( min-width: 500px) {
    :root {
      --hexagon-scale: 1.18;
    }
  }

  //////////////////////////

  html {
    font-size: var(--fs-root);
  }

  body {
    margin: 0;
    font-family: var(--ff-primary);
    font-weight: var(--fw-reg);
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
  } 

  h1, h2, h3, h4 {
    margin: 0;
  }

  p {
    font-family: var(--ff-secondary);
  }

  a {
    font-family: var(--ff-secondary);
    text-decoration: none;
    color: unset;
    font-weight: var(--fw-bold);
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

  // react-social-icons

  body ul > a.social-icon {
    // width: 4.4em !important;
    // height: 4.4em !important;
    // width: 4.4em;
    // height: 4.4em;
    // background: blue;
  }

  .

`

const GlobalStyleWrapper = React.forwardRef(({ ...restProps }, ref) => {
  const [ windowHeight, setWindowHeight ] = React.useState(typeof window !== 'undefined'  && `${document.documentElement.clientHeight}px`)

  React.useEffect(() => {
    const handleResize = () => setWindowHeight(`${document.documentElement.clientHeight}px`)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <GlobalStyle windowHeight={windowHeight} ref={ref} { ...restProps }/>
})

// export default GlobalStyle
export default GlobalStyleWrapper