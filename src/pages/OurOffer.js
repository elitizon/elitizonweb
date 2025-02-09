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
    heading="Transform & Scale"
    subheading="Enterprise Solutions"
    textOnLeft={true}
    image={<IdeaImage />}
    description={
      <Content>
        <p>
          For established companies: Transform your business with <FocusContent>Enterprise-grade AI Agents</FocusContent> built on our battle-tested platform.
        </p>
        <p>
          Leverage our deep expertise to <FocusContent>digitize your core business processes</FocusContent> and create new revenue streams.
        </p>
        <p>
          Access our full suite of <FocusContent>enterprise development services</FocusContent> with dedicated support and custom SLAs.
        </p>
      </Content>
    }
  ></Module>
)

const ModuleLaunch = () => (
  <Module
    pill="2"
    heading="Scale & Profit"
    subheading="Elite Startup Program"
    textOnLeft={false}
    image={<ProductImage />}
    description={
      <Content>
        <p>
          For selected startups only: Join our exclusive <FocusContent>startup partnership program</FocusContent> after approval (subject to evaluation).
        </p>
        <p>
          Qualified startups access our enterprise-grade <FocusContent>Vertical AI Platform</FocusContent> with zero upfront investment.
        </p>
        <p>
          <span>
            Selected partners earn <FocusContent>up to 50% revenue share</FocusContent> through our exclusive startup program while retaining full equity.
          </span>
        </p>
      </Content>
    }
  ></Module>
)

const ModuleScale = () => (
  <Module
    pill="3"
    heading="Maximize ROI"
    subheading="Ready-to-Deploy Solutions"
    textOnLeft={true}
    image={<GrowthImage />}
    description={
      <Content>
        <p>
          Start generating revenue in just <FocusContent>72 hours</FocusContent> with our market-tested templates. (Coming Soon ⏰)
        </p>
        <p>
          Minimize costs and maximize returns with our <FocusContent>proven frameworks</FocusContent> and automatic upgrades.
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
