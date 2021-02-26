import React, { useState } from 'react'
import { Container, Form, Label, LabelInner, Input, SubmitButton, ConfirmationMessage } from './styles'

export default function ContactForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

ContactForm.Form = function ContactFormForm({ onSubmit = () => {}, children, ...restProps }) {

  const handleSubmit = event=> {
    onSubmit(event)
  }

  return <Form onSubmit={handleSubmit} {...restProps}>{children}</Form>
}

ContactForm.TextInput = function ContactFormTextInput({ textarea = false, bufferLength = 1, maxLength = Infinity, minLength, children, ...restProps }) {
  const [value, setValue] = useState('')
  const [isError, setIsError] = useState(false)

  const handleChange = event => {
    const value = event.target.value
    if (value.length < Number(maxLength) + Number(bufferLength)) {
      setValue(value)
      if (value.length < maxLength) {
        isError && setIsError(false)
      } else {
        !isError && setIsError(true)
      }
    }
  }

  return (
    <Label>
      <LabelInner>{children}</LabelInner>
      <Input isTextarea={textarea} maxLength={maxLength && Number(maxLength) + Number(bufferLength)} minLength={minLength} value={value} onChange={handleChange} isError={isError} {...restProps} />
    </Label>
  )
}

ContactForm.SubmitButton = function ContactFormSubmitButton({ children, ...restProps }) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>
}

ContactForm.ConfirmationMessage = function ContactFormConfirmationMessage({ children, ...restProps }) {
  return <ConfirmationMessage {...restProps}>{children}</ConfirmationMessage>
}