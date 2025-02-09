import React from "react"
import tw from "twin.macro"
import { Page } from "../components/Page"
import ContactForm from "../components/forms/TwoColContactUsWithIllustrationFullForm"

const CallToActionHeader = tw.p`sm:text-2xl text-xl`

const heading = (
  <>
    Let's discuss your <span tw="text-primary-500">next project</span>
  </>
)

const description = (
  <>
    <CallToActionHeader>
      Interested in <span tw="text-primary-500">partnering</span> with us?
    </CallToActionHeader>
  </>
)

const submitButtonText = <>Send Message</>
const fullNamePlaceholder = `Your name *`
const emailPlaceholder = `Your business email *`
const subjectPlaceholder = `Subject`
const messagePlaceholder = `Tell us about your project or partnership opportunity *`

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
