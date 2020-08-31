import React from "react"
import tw  from "twin.macro"
import { Page } from "../components/Page"
import ContactForm from "../components/forms/TwoColContactUsWithIllustrationFullForm"

const CallToActionHeader = tw.p`sm:text-2xl text-xl`

const heading = (
  <>
    Feel free to <span tw="text-primary-500">get in touch</span>
    <wbr /> with us.
  </>
)

const description = (
  <>
    <CallToActionHeader>
      Get a free <span tw="text-primary-500">one-to-one</span> consultation.
    </CallToActionHeader>
  </>
)

const submitButtonText = <>Request Free Consultation Now!</>
const fullNamePlaceholder = `Your name *`
const emailPlaceholder = `Your business email *`
const subjectPlaceholder = `Subject`
const messagePlaceholder = `How can we help? *`

export default (props) => {
  return (
    <Page>
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
