import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--clr-header-bg-opaque);
`

export const Outer = styled.div`
  // position: ${({ position }) => position};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  user-select: none;

  transition: background-color var(--transition-time-fast), opacity var(--transition-time-fast) ease-in-out, color var(--transition-time-fast) ease-in-out;

  opacity: 1;
  color: var(--clr-header);

  &.opaque {
    color: var(--clr-header-opaque);
    background-color: var(--clr-header-bg-opaque);
    box-shadow: var(--bs-header);
  }

  &.hidden {
    opacity: 0;
    pointer-events: none;
  }

  &.hidden * {
    transition: color var(--transition-time-fast) ease-in-out;
    color: #fff0 !important;
  }
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