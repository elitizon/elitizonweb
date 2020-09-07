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
        subheading={<Subheading>Technology Venture Studio</Subheading>}
        heading="We launch 🚀 innovative products."
        description={
          <>
            As a technology venture studio we transform{" "}
            <StrongText>ideas</StrongText> into{" "}
            <StrongText>products</StrongText> and products into{" "}
            <StrongText>companies</StrongText>.
          </>
        }
        buttonRounded={false}
        primaryButtonText="Discover our mission"
        imageFluid={data.image1.childImageSharp.fluid}
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageShadow={false}
        imageCss="hover:scale-150 transition duration-300 transform ease-in-out"
        primaryButtonUrl="/OurMission"
      />
      <MainFeature1
        subheading={<Subheading>From Zero to One</Subheading>}
        heading={<>Where Elite Companies Are Forged 🔥</>}
        description={
          <>
            We leverage <StrongText>specific knownledge</StrongText>, <StrongText>teams</StrongText> and <StrongText>capital</StrongText> to build and launch
            successful <StrongText>product companies</StrongText>.
          </>
        }
        buttonRounded={false}
        primaryButtonText={false && <>Our process</>}
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        imageFluid={data.image2.childImageSharp.fluid}
        textOnLeft={false}
        primaryButtonUrl="/#"
      />
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
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
            },
            {
              image: <ShieldIconImage />,
              title: "Strong Teams",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
            },
            {
              image: <CustomizeIconImage />,
              title: "Customer Satisfaction",
              description:
                "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
            },
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
    image2: file(relativePath: { eq: "photo-computer-code1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 780) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image1: file(relativePath: { eq: "photo-computer-on-table1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 780) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
