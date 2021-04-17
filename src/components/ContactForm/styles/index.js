import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  font-size: 1.2rem;

  // max-width: 45rem;
`

export const Form = styled.form`
  display: ${({ shouldShow }) => (shouldShow ? 'flex' : 'none')};
  flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5em;

  @media (min-width: 800px) {
    & {
      flex-direction: row;
    }
  }
`

export const LabelInner = styled.div`
  width: 10em;
  margin-bottom: 0.5em;
  font-weight: var(--fw-bold);

  & span {
    color: var(--clr-accent-primary);
  }
`

export const Input = styled.input.attrs(props => ({
  as: props.isTextarea && 'textarea'
}))`
  box-sizing: border-box;
  width: 100%;
  ${({ isTextarea }) => isTextarea && 'height: 18rem;'}
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 0.2em;
  background: var(--clr-primary);
  color: var(--clr-secondary);
  ${({ isError }) => isError && 'color: var(--clr-error) !important;'};
  transition: color var(--transition-time-fast) ease-in-out,
    background-color var(--transition-time-fast) ease-in-out;
  resize: none;

  &:focus {
    background-color: var(--clr-accent-primary);
    color: var(--clr-dark);
    transition: none;
  }
`

export const SubmitButton = styled.button`
  display: inline;
  align-self: flex-end;
  padding: 1em 2em;
  border: none;
  border-radius: 0.2em;
  background-color: var(--clr-primary);
  color: var(--clr-secondary);
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color var(--transition-time-fast) ease-in-out,
    background-color var(--transition-time-fast) ease-in-out,
    transform var(--transition-time-fast) ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.02);
    background-color: var(--clr-accent-primary);
    color: var(--clr-dark);
    transition: none;
  }
`

export const ConfirmationMessage = styled.div`
  display: ${({ shouldShow }) => (shouldShow ? 'unset' : 'none')};
`
