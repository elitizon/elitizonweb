import React from "react"
import tw from "twin.macro"
import MainFeature1 from "../components/features/TwoColWithButton.js"
import Features from "../components/features/ThreeColSimple.js"
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js"
import { Page } from "../components/Page"

const ShieldIconImage = "/images/shield-icon.svg"
const CustomerLoveIconImage = "/images/simple-icon.svg"
const SupportIconImage = "/images/support-icon.svg"

const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  return (
    <Page>
      <MainFeature1
        subheading={<Subheading>About elitizon</Subheading>}
        heading="We launch 🚀 innovative products."
        description="We're fully committed to finding new ideas and opportunities that together with a great product, technology and team can disrupt potential markets."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageShadow={false}
        imageCss="hover:scale-150 transition duration-300 transform ease-in-out"
        primaryButtonUrl = "/#"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We explore new markets."
        buttonRounded={false}
        primaryButtonText="Contact Us"
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
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description:
              "Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport",
          },
        ]}
        linkText=""
      />
      <TeamCardGrid subheading={<Subheading>Our Team</Subheading>} />
    </Page>
  )
}
