import React from "react"
import AnimationRevealPage from "../helpers/AnimationRevealPage.js"
import tw from "twin.macro"
import Header from "../components/headers/light.js"
import Footer from "../components/footers/SimpleFiveColumn"
import MainFeature1 from "../components/features/TwoColWithButton.js"
import Features from "../components/features/ThreeColSimple.js"
import TeamCardGrid from "../components/cards/ProfileThreeColGrid.js"

const ShieldIconImage = "/images/shield-icon.svg"
const CustomerLoveIconImage = "/images/simple-icon.svg"
const SupportIconImage = "/images/support-icon.svg"


const Subheading = tw.span`uppercase tracking-wider text-sm`
export default () => {
  return (
    <AnimationRevealPage>
      <Header noanimation />
      <MainFeature1
        subheading={<Subheading>About Treact</Subheading>}
        heading="We are a modern desgin agency."
        buttonRounded={false}
        primaryButtonText="See Portfolio"
        imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageShadow = {false} 
        imageCss = "hover:scale-150 transition duration-300 transform ease-in-out"
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to disrupt the desgin space."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
        textOnLeft={false}
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
      <Footer noanimation/>
    </AnimationRevealPage>
  )
}
