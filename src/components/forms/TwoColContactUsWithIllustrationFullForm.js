import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js"
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js"
import EmailIllustration from "../../images/undraw_envelope_n8lc.svg"

const Container = tw.div`relative`
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`
const TextColumn = styled(Column)((props) => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`,
])
const ImageContainer = styled(tw.div`rounded w-full h-full`)`
  svg {
    ${tw`w-full h-full`} 
  }
`

const TextContent = tw.div`lg:py-8 text-center md:text-left`

const Subheading = tw(SubheadingBase)`text-center md:text-left`
const Heading = tw(
  SectionHeading 
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`
const Description = tw.div`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`
const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`
const Textarea = styled(Input).attrs({ as: "textarea" })`
  ${tw`h-24`}
`

const SubmitButton = tw(PrimaryButtonBase)`inline-block mt-8`

export default ({
  subheading = "Contact Us",
  heading = (
    <span>
      Feel free to <span tw="text-primary-500">get in touch</span>
      <wbr /> with us.
    </span>
  ),
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  submitButtonText = "Send",
  formAction = "",
  formMethod = "POST",
  textOnLeft = true,
  fullNamePlaceholder = "Full Name",
  emailPlaceholder = "Your Email Address",
  messagePlaceholder = "Your Message Here",
  subjectPlaceholder = "Subject",
  image = (<EmailIllustration/>)
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <ImageContainer>{image }</ImageContainer>
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
            <Form action={formAction} method={formMethod}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact"/>
              <Input
                type="email"
                name="email"
                placeholder={emailPlaceholder}
                required
              />
              <Input type="text" name="name" placeholder={fullNamePlaceholder} required/>
              <Input type="text" name="subject" placeholder={subjectPlaceholder} />
              <Textarea name="message" placeholder={messagePlaceholder} required />
              <SubmitButton type="submit">{submitButtonText}</SubmitButton>
            </Form>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
