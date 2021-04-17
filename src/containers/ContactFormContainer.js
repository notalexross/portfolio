import React, { useState } from 'react'
import { ContactForm } from '../components'

export default function ContactFormContainer() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()

    const formData = new FormData(event.target)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then(response => {
        if (!response.ok) throw new Error(`${response.status} (${response.statusText})`)
        setIsSubmitted(true)
      })
      .catch(alert)
  }

  return (
    <ContactForm>
      <ContactForm.Form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        shouldShow={!isSubmitted}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <ContactForm.TextInput
          name="name"
          placeholder="Your Name"
          minLength="3"
          maxLength="100"
          required
        >
          Name
          <span>*</span>
        </ContactForm.TextInput>
        <ContactForm.TextInput
          type="email"
          name="email"
          placeholder="Your Email"
          minLength="5"
          maxLength="100"
          required
        >
          Email
          <span>*</span>
        </ContactForm.TextInput>
        <ContactForm.TextInput name="subject" placeholder="Your Subject" maxLength="100">
          Subject
        </ContactForm.TextInput>
        <ContactForm.TextInput
          textarea
          name="message"
          placeholder="Your Message"
          minLength="10"
          maxLength="2000"
          required
        >
          Message
          <span>*</span>
        </ContactForm.TextInput>
        <ContactForm.SubmitButton>Send</ContactForm.SubmitButton>
      </ContactForm.Form>
      <ContactForm.ConfirmationMessage shouldShow={isSubmitted}>
        <p>Message sent!</p>
        <p>
          Thank you for getting in touch, please expect a response at the email address you
          provided.
        </p>
      </ContactForm.ConfirmationMessage>
    </ContactForm>
  )
}
