import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Page } from "../components/Page"
import ContactForm from "../components/forms/TwoColContactUsWithIllustrationFullForm"

const heading = (
  <>
    Feel free to <span tw="text-primary-500">get in touch</span>
    <wbr /> with us.
  </>
)

const description = (
  <>
    <p tw="sm:text-2xl text-xl">
      Get a free <span tw="text-primary-500">one-to-one</span> consultation.
    </p>
  </>
)

const submitButtonText = <>Request Free Consultation Now!</>
const fullNamePlaceholder = `Your name *`
const emailPlaceholder = `Your business email *`
const subjectPlaceholder = `Subject`
const messagePlaceholder = `How can we help? *`

export default (props) => {
  return (
    <Page {...props}>
      <ContactForm
        heading={heading}
        description={description}
        submitButtonText={submitButtonText}
        fullNamePlaceholder={fullNamePlaceholder}
        emailPlaceholder={emailPlaceholder}
        subjectPlaceholder={subjectPlaceholder}
        messagePlaceholder={messagePlaceholder}
        formAction="/thankyou"
        formMethod="POST"
      />
    </Page>
  )
}
