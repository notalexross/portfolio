// TODO: Allow people to add files? (input type file)
import React, { useState } from 'react'
import { ContactForm } from '../components'

export default function ContactFormContainer() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = event => {
    console.log('submitting')
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
      .catch(error => alert(error))
  }

  return (
    <ContactForm>
      <ContactForm.Form netlify onSubmit={handleSubmit} style={{ display: isSubmitted ? 'none' : 'flex' }}>
        <ContactForm.TextInput name="name" placeholder="Your Name" required maxLength="100" minLength="3">
          Name<span style={{color: 'var(--clr-accent-primary)'}}>*</span>
        </ContactForm.TextInput>
        <ContactForm.TextInput type="email" name="email" placeholder="Your Email" required maxLength="100" minLength="5">
          Email<span style={{color: 'var(--clr-accent-primary)'}}>*</span>
        </ContactForm.TextInput>
        <ContactForm.TextInput name="subject" placeholder="Your Subject" maxLength="100">
          Subject
        </ContactForm.TextInput>
        <ContactForm.TextInput textarea name="message" placeholder="Your Message" required maxLength="2000" minLength="10">
          Message<span style={{color: 'var(--clr-accent-primary)'}}>*</span>
        </ContactForm.TextInput>
        <ContactForm.SubmitButton>Send</ContactForm.SubmitButton>
      </ContactForm.Form>
      <ContactForm.ConfirmationMessage style={{ display: isSubmitted ? 'unset' : 'none' }}>
        <p>Message sent!</p>
        <p>Thank you for getting in touch, please expect a response at the email address you provided.</p>
      </ContactForm.ConfirmationMessage>
    </ContactForm>
  )
}
