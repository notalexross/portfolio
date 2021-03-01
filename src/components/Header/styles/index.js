import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--clr-header-bg-opaque);
`

export const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  user-select: none;

  color: ${({ isOpaque }) => isOpaque ? 'var(--clr-header-opaque)' : 'var(--clr-header)'};
  background-color: ${({ isOpaque }) => isOpaque ? 'var(--clr-header-bg-opaque)' : 'transparent'};
  box-shadow: ${({ isOpaque }) => isOpaque ? 'var(--bs-header)' : 'none'};

  opacity: ${({ isVisible }) => isVisible ? 1 : 0};
  pointer-events: ${({ isVisible }) => isVisible ? 'auto' : 'none'};

  transition: background-color var(--transition-time-fast), opacity var(--transition-time-fast) ease-in-out, color var(--transition-time-fast) ease-in-out;

  ${({ isVisible }) => !isVisible && `
    & * {
      transition: color var(--transition-time-fast) ease-in-out !important;
      color: #fff0 !important;
    }
  `}

  ${({ isVisible, isOpaque }) => isVisible && !isOpaque && `
    transition: opacity var(--transition-time-fast) ease-in-out, color var(--transition-time-fast) ease-in-out;
  `}

  ${({ shouldTransition }) => !shouldTransition && `
    &,
    & * {
      transition: none !important;
    }
  `}
`

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0.5rem var(--min-margin);
  font-weight: var(--fw-bold);
`

export const Spacer = styled(Inner)`
  visibility: hidden;
`