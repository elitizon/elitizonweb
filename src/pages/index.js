import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import MainFeature1 from "../components/features/TwoColWithButton.js"
import Features from "../components/features/ThreeColSimple.js"

import SupportIconImage from "../images/support-icon.svg"
import ShieldIconImage from "../images/shield-icon.svg"
import CustomizeIconImage from "../images/customize-icon.svg"

import { Page } from "../components/Page"

const StrongText = tw.span`text-gray-800`

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default (props) => {
  const { data } = props
  return (
    <Page {...props}>
      <MainFeature1
        noanimation
        subheading={
          <Subheading>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              The Vertical AI Sovereignty Protocol
            </span>
          </Subheading>
        }
        heading="Unlock Your Vertical’s AI Potential"
        description={
          <>
            <p className="text-xl font-bold tracking-wide leading-relaxed text-gray-800 mb-4">
              Turn Domain Expertise into an Unstoppable Advantage
            </p>
            87% of industries will face AI-powered disruption by 2026. We arm leaders with{" "}
            <StrongText>Vertical AI Agents</StrongText> that:<br />
            <span className="block mt-4">
              ▸ <StrongText>Lock</StrongText> your IP into self-reinforcing market dominance<br />
              ▸ <StrongText>Outpace</StrongText> copycats with algorithmic moats<br />
              ▸ <StrongText>Rewrite</StrongText> industry rules in your favor
            </span>
          </>
        }
        buttonRounded={false}
        primaryButtonText="Claim Your AI Sovereignty →"
        imageFluid={data.image1.childImageSharp.fluid}
        imageSrc="images/a-engineering.jpg"
        imageShadow={false}
        imageCss="hover:scale-105 transition-transform duration-500 ease-out-expo"
        primaryButtonUrl="/OurMission"
      />
      <MainFeature1
        subheading={<Subheading>Data & AI Innovation</Subheading>}
        heading={<>Revolutionizing Industries</>}
        description={
          <>
            We <StrongText>leverage data & AI</StrongText> to{" "}
            <StrongText>gain insights</StrongText>,{" "}
            <StrongText>revolutionize products</StrongText>, and{" "}
            <StrongText>reshape industries</StrongText>.
          </>
        }
        buttonRounded={false}
        primaryButtonText={false && <>Our process</>}
        imageSrc="images/blue-ocean.jpg"
        imageFluid={data.image2.childImageSharp.fluid}
        textOnLeft={false}
        primaryButtonUrl="/#"
      />{" "}
      {false && (
        <Features
          subheading={<Subheading>Our Values</Subheading>}
          heading="We follow these."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          cards={[
            {
              image: <SupportIconImage />,
              title: "24/7 Support",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
            },
            {
              image: <ShieldIconImage />,
              title: "Strong Teams",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
            },
            {
              image: <CustomizeIconImage />,
              title: "Customer Satisfaction",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport"
            }
          ]}
          linkText=""
        />
      )}
      <div tw="mt-20"></div>
    </Page>
  )
}

export const query = graphql`
  query SITE_HOME_QUERY {
    image2: file(relativePath: { eq: "blue-ocean.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 780) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "ai-engineering.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 780) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
