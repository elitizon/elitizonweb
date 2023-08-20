import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Page } from "../components/Page"

import IdeaImage from "../images/undraw_ideation.svg"
import ProductImage from "../images/undraw_mobile_marketing.svg"
import GrowthImage from "../images/undraw_growth_curve.svg"

const Container = tw.div`relative`

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`

const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`

const ImageColumnBase = tw(
  Column
)`md:w-6/12 flex-shrink-0 relative overflow-hidden rounded`

const ImageColumn = styled(ImageColumnBase)`
  img {
    transition: transform 0.5s, filter 1.5s ease-in-out;
  }

  img:hover {
    filter: grayscale(0);
    transform: scale(1.1);
  }
`

const TextColumn = styled(Column)(({ textOnLeft = true }) => [
  tw`mt-16 md:w-6/12 md:mt-0`,
  textOnLeft
    ? tw`md:mr-12 lg:mr-16 md:order-first`
    : tw`md:ml-12 lg:ml-16 md:order-last`
])

const TextContent = tw.div`lg:py-8 text-center md:text-left`

export const SectionHeading = tw.h3`text-4xl sm:text-5xl font-black tracking-wide text-center`
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`

export const SubheadingBase = tw.h2`font-bold text-2xl sm:text-3xl text-primary-500`

const Subheading = tw(SubheadingBase)`text-center md:text-left`
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`

const Content = styled(tw.div``)`
  p {
    ${tw`mt-6 ml-6 font-normal text-left text-secondary-500`}
  }
`

const FocusContent = tw.span`text-primary-500 font-bold`

const Module = ({
  pill = "1",
  heading = "Heading",
  subheading = "SubHeading",
  description = <>Description</>,
  image = <IdeaImage></IdeaImage>,
  textOnLeft = true
}) => {
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>{image}</ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Subheading>{subheading}</Subheading>
            <Heading>
              <div tw="flex items-center justify-center space-x-4 sm:justify-start">
                <div tw="bg-white rounded-full h-12 w-12 border-2 border-primary-500 relative font-medium text-2xl">
                  <div tw="absolute flex items-center justify-center inset-x-0 inset-y-0">
                    {pill}
                  </div>
                </div>
                <div tw="inline-block items-center justify-center py-0 font-bold">
                  {heading}
                </div>
              </div>
            </Heading>
            <Description>{description}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}

const ModuleIdea = () => (
  <Module
    pill="1"
    heading="Idea"
    subheading="Idea generation Phase"
    textOnLeft={true}
    image={<IdeaImage />}
    description={
      <Content>
        <p>We are always seeking new ideas and problems to solve.</p>
        <p>
          We generate <FocusContent>ideas</FocusContent> internally or we make a
          partnership with aspiring entrepreneurs who possess a{" "}
          <FocusContent>specific knowledge</FocusContent>.
        </p>
        <p>
          We pick a subject and we start to evaluate the size of the potential
          market and the potential solutions.
        </p>
        <p>
          Once convinced of a potential{" "}
          <FocusContent>"product-market fit"</FocusContent> we start the product
          development.
        </p>
        <p>
          <span>We don't seek external capital for this phase.</span>
        </p>
      </Content>
    }
  ></Module>
)

const ModuleLaunch = () => (
  <Module
    pill="2"
    heading="Product"
    subheading="Launch Phase"
    textOnLeft={false}
    image={<ProductImage />}
    description={
      <Content>
        <p>
          We form a product/service team and we start an{" "}
          <FocusContent>iterative development process</FocusContent>. The sooner
          we can launch the better.
        </p>
        <p>
          We ship versions often, we listen to our customers and we measure the{" "}
          <FocusContent>traction</FocusContent>. This phase is mainly financed
          by ELITIZON or Business Angels.
        </p>
        <p>
          <span>
            If we measure high traction we{" "}
            <FocusContent>leverage capital</FocusContent> to accelerate the
            growth. We incorporate the product team into a new company.
          </span>
        </p>
      </Content>
    }
  ></Module>
)

const ModuleScale = () => (
  <Module
    pill="3"
    heading="Company"
    subheading="ScaleUp Phase"
    textOnLeft={true}
    image={<GrowthImage />}
    description={
      <Content>
        <p>
          We leverage <FocusContent>people, capital, and know-how</FocusContent>{" "}
          of ELITIZON's Core Team to scale the development and the adoption of
          the product.
        </p>
      </Content>
    }
  ></Module>
)

export default () => {
  return (
    <Page>
      <ModuleIdea />
      <ModuleLaunch />
      <ModuleScale />
    </Page>
  )
}
