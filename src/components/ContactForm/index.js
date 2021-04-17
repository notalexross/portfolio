import React, { useState } from 'react'
import {
  Container,
  Form,
  Label,
  LabelInner,
  Input,
  SubmitButton,
  ConfirmationMessage
} from './styles'

export default function ContactForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

ContactForm.Form = function ContactFormForm({
  children,
  shouldShow = true,
  onSubmit = () => {},
  ...restProps
}) {
  const handleSubmit = event => {
    onSubmit(event)
  }

  return (
    <Form shouldShow={shouldShow} onSubmit={handleSubmit} {...restProps}>
      {children}
    </Form>
  )
}

ContactForm.TextInput = function ContactFormTextInput({
  textarea = false,
  bufferLength = 1,
  maxLength = Infinity,
  minLength,
  children,
  ...restProps
}) {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = event => {
    const targetValue = event.target.value
    if (targetValue.length < Number(maxLength) + Number(bufferLength)) {
      setValue(targetValue)
      if (targetValue.length < maxLength) {
        isError && setIsError(false)
      } else {
        !isError && setIsError(true)
      }
    }
  }

  return (
    <Label>
      <LabelInner>{children}</LabelInner>
      <Input
        isTextarea={textarea}
        maxLength={maxLength && Number(maxLength) + Number(bufferLength)}
        minLength={minLength}
        value={value}
        onChange={handleChange}
        isError={isError}
        {...restProps}
      />
    </Label>
  )
}

ContactForm.SubmitButton = function ContactFormSubmitButton({ children, ...restProps }) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>
}

ContactForm.ConfirmationMessage = function ContactFormConfirmationMessage({
  children,
  shouldShow = false,
  ...restProps
}) {
  return (
    <ConfirmationMessage shouldShow={shouldShow} {...restProps}>
      {children}
    </ConfirmationMessage>
  )
}
