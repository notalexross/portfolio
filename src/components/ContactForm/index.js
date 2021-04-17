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
  children,
  minLength,
  maxLength = Infinity,
  textarea = false,
  bufferLength = 1,
  ...restProps
}) {
  const [inputValue, setInputValue] = useState('')
  const [isError, setIsError] = useState(false)

  const maxBufferedLength = maxLength && Number(maxLength) + Number(bufferLength)

  const handleChange = event => {
    const { value } = event.target
    if (value.length < maxBufferedLength) {
      setInputValue(value)
      setIsError(value.length >= maxLength)
    }
  }

  return (
    <Label>
      <LabelInner>{children}</LabelInner>
      <Input
        isTextarea={textarea}
        maxLength={maxBufferedLength}
        minLength={minLength}
        value={inputValue}
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
