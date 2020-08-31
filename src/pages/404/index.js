import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import {
  SectionHeading,
} from "../../components/misc/Headings.js"
import { Page } from "../../components/Page"
import NotFoundLogo from "../../images/undraw_not_found_60pq.svg"

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
const TextContent = tw.div`lg:py-8 mt-4 text-gray-700 text-center md:text-left`

const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-4xl sm:text-5xl lg:text-6xl text-center md:text-left leading-tight`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

export default () => {
  return (
    <Page>
      <Container>
        <TwoColumn>
          <ImageColumn>
            <ImageContainer>
              <NotFoundLogo />
            </ImageContainer>
          </ImageColumn>
          <TextColumn>
            <Heading>Oops!</Heading>
            <TextContent>
              We can't seem to find the page you're looking for.
            </TextContent>
            <Description>Error code: 404</Description>
          </TextColumn>
        </TwoColumn>
      </Container>
    </Page>
  )
}
