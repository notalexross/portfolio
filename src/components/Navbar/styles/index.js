import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  & > *:last-child {
    justify-self: end;
  }

  & > *:not(:nth-child(2)) {
    visibility: hidden;
    width: 0;
  }

  @media (min-width: 700px) {
    & > *:not(:nth-child(2)) {
      visibility: unset;
      width: unset;
    }
  }

  overflow: hidden;
`