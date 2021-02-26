import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  // max-width: 45rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 1.5em;

  flex-direction: column;
  @media (min-width: 800px) {
    & {
      flex-direction: row;
    }
  }
`

export const LabelInner = styled.div`
  width: 10em;
  font-weight: var(--fw-bold);
  margin-bottom: 0.5em;
`

export const Input = styled.input.attrs(props => ({
  as: props.isTextarea && 'textarea'
}))`
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 0.6em 1.2em;
  background: var(--clr-primary);
  border-radius: 0.2em;
  // border-bottom: solid 3px var(--clr-accent-primary);

  color: var(--clr-secondary);

  transition: color var(--transition-time-fast) ease-in-out, background-color var(--transition-time-fast) ease-in-out;
  &:focus {
    background-color: var(--clr-accent-primary);
    color: var(--clr-dark);
    transition: none;
  }

  ${({ isError }) => (
    isError && 'color: var(--clr-error) !important;' 
  )};

  resize: none;
  ${({ isTextarea }) => (
    isTextarea && (`
      resize: none;
      height: 18rem;
    `)
  )}
`

export const SubmitButton = styled.button`
  color: var(--clr-secondary);
  background-color: var(--clr-primary);
  border: none;
  padding: 1em 2em;
  display: inline;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: var(--fw-bold);
  letter-spacing: 0.08em;
  border-radius: 0.2em;

  align-self: flex-end;
  // margin-top: 1em;

  transition: color var(--transition-time-fast) ease-in-out, background-color var(--transition-time-fast) ease-in-out, transform var(--transition-time-fast) ease-in-out;
  &:hover,
  &:focus {
    background-color: var(--clr-accent-primary);
    color: var(--clr-dark);
    transform: scale(1.02   );
    transition: none;
  }
`

export const ConfirmationMessage = styled.div`
  // text-align: center;
`
