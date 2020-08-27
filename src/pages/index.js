import React from "react"
import tw from "twin.macro"
import MainFeature1 from "../components/features/TwoColWithButton.js"
import Features from "../components/features/ThreeColSimple.js"

import SupportIconImage from "../images/support-icon.svg"
import ShieldIconImage from "../images/shield-icon.svg"
import CustomizeIconImage from "../images/customize-icon.svg"

import { Page } from "../components/Page"

const StrongText = tw.span`text-gray-800`

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  return (
    <Page>
      <MainFeature1 noanimation
        subheading={<Subheading>Technology Venture Studio</Subheading>}
        heading="We launch 🚀 innovative products."
        description={(<>As a technology venture studio we develop <StrongText>ideas</StrongText> into <StrongText>products</StrongText> and products into <StrongText>companies</StrongText>.</>)}
        buttonRounded={false}
        primaryButtonText="Discover our mission"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageShadow={false}
        imageCss="hover:scale-150 transition duration-300 transform ease-in-out"
        primaryButtonUrl = "/ContactUs"
      />
      <MainFeature1 
        subheading={<Subheading>From Zero to One</Subheading>}
        heading="We explore new markets."
        description = {<>We're fully committed to finding new ideas and opportunities that together with a great product, technology and team can disrupt potential markets.</>}
        buttonRounded={false}
        primaryButtonText= {false && <>Our process</>}
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
        primaryButtonUrl = "/#"
      />
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
            image: <CustomizeIconImage/>,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
    </Page>
  )
}
