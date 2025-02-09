import React from "react"
import tw from "twin.macro"
import { graphql } from "gatsby"
import { ArrowRightIcon } from "@heroicons/react/24/solid"

// Components
import { Page } from "../components/Page"
import MainFeature1 from "../components/features/TwoColWithButton.js"
import Features from "../components/features/ThreeColSimple.js"

// Images
import SupportIconImage from "../images/support-icon.svg"
import ShieldIconImage from "../images/shield-icon.svg"
import CustomizeIconImage from "../images/customize-icon.svg"

// Styled Components
const StrongText = tw.span`text-gray-800`
const Subheading = tw.span`uppercase tracking-wider text-sm`

export default (props) => {
  const { data } = props
  return (
    <Page 
      {...props}
      title="Elitizon - Vertical AI Sovereignty Protocol"
      description="Transform your domain expertise into AI-powered market dominance"
    >
      <MainFeature1
        noAnimation
        subheading={
          <Subheading aria-label="Vertical AI Sovereignty Protocol" className="text-primary-600 font-semibold">
            The Vertical AI Sovereignty Protocol
          </Subheading>
        }
        heading={
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
            Unlock Your Vertical's AI Potential
          </h1>
        }
        description={
          <>
            <p className="text-2xl font-bold tracking-wide leading-relaxed mb-6">
              Turn Domain Expertise into an Unstoppable Advantage
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              <strong className="font-semibold">87% of industries</strong> will face AI-powered disruption by 2026. 
              We arm leaders with{" "}
              <StrongText aria-label="Vertical AI Agents" className="font-semibold">Vertical AI Agents</StrongText> that:
            </p>
            <ul className="space-y-5 list-none pl-0">
              <li className="flex items-center group">
                <span className="mr-3 text-primary-600 text-xl transform group-hover:scale-110 transition-transform">▸</span>
                <span className="text-lg">
                  <StrongText className="font-semibold">Lock</StrongText> your IP into self-reinforcing market dominance
                </span>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-primary-600 text-xl transform group-hover:scale-110 transition-transform">▸</span>
                <span className="text-lg">
                  <StrongText className="font-semibold">Outpace</StrongText> copycats with algorithmic moats
                </span>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-primary-600 text-xl transform group-hover:scale-110 transition-transform">▸</span>
                <span className="text-lg">
                  <StrongText className="font-semibold">Rewrite</StrongText> industry rules in your favor
                </span>
              </li>
            </ul>
          </>
        }
        buttonRounded={false}
        primaryButtonText={
          <span className="inline-flex items-center text-lg font-semibold tracking-wide hover:translate-x-1 transition-transform">
            Claim Your AI Sovereignty 
            <ArrowRightIcon className="ml-3 w-5 h-5" aria-hidden="true" />
          </span>
        }
        imageFluid={data.image1.childImageSharp.fluid}
        imageSrc="images/quantalogic-01.jpg"
        imageShadow={true}
        imageCss="hover:scale-105 transition-transform duration-700 ease-out"
        primaryButtonUrl="/our-mission"
      />
      <MainFeature1
        subheading={<Subheading>Why Vertical AI Agents?</Subheading>}
        heading={<>For Innovators Who Refuse to Be Disrupted</>}
        description={
          <>
            <ul className="space-y-5 list-none pl-0 mb-8">
              <li className="flex items-center group">
                <span className="mr-3 text-primary-600 text-xl transform group-hover:scale-110 transition-transform">▸</span>
                <span className="text-lg">
                  <StrongText className="font-semibold">Outpace Legacy Competitors:</StrongText>{" "}
                  Convert your hard-won knowledge into AI systems that operate at unprecedented speed and precision
                </span>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-primary-600 text-xl transform group-hover:scale-110 transition-transform">▸</span>
                <span className="text-lg">
                  <StrongText className="font-semibold">Monetize What You Know:</StrongText>{" "}
                  Build recurring revenue streams from AI Agents that scale your expertise 24/7
                </span>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-primary-600 text-xl transform group-hover:scale-110 transition-transform">▸</span>
                <span className="text-lg">
                  <StrongText className="font-semibold">Future-Proof Your Business:</StrongText>{" "}
                  Create intelligent systems that evolve with your industry's needs
                </span>
              </li>
            </ul>
            <p className="text-xl italic text-gray-600 border-l-4 border-primary-500 pl-4">
              "The greatest competitive risk isn't AI itself – it's watching others harness it first."
            </p>
          </>
        }
        buttonRounded={false}
        imageSrc="images/blue-ocean.jpg"
        imageFluid={data.image2.childImageSharp.fluid}
        textOnLeft={false}
        primaryButtonUrl="/#"
      />
      <div tw="mt-20"></div>
      <section className="max-w-screen-xl mx-auto my-16 px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-extrabold mb-4 text-gray-900">
            ELITZON’s Vertical AI Advantage
          </h3>
          <p className="text-xl font-semibold text-gray-700">
            From Expertise to Execution
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">
              For Established Enterprises
            </h4>
            <ul className="list-disc ml-8 space-y-3 text-lg text-gray-600">
              <li>
                <span className="font-semibold">AI Agent Consulting & Development</span>:<br/>
                ↳ Convert proprietary workflows into autonomous AI systems<br/>
                ↳ Deploy market-specific agents in &lt;12 weeks
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-gray-800 mb-3">
              For Domain Experts &amp; Startups
            </h4>
            <ul className="list-disc ml-8 space-y-3 text-lg text-gray-600">
              <li>
                <span className="font-semibold">Co-Creation Partnerships</span>:<br/>
                ↳ Jointly build vertical AI agents with our engineers<br/>
                ↳ Shared revenue model: Earn 40-70% of agent-generated income<br/>
                ↳ White-label solutions for rapid market entry
              </li>
            </ul>
          </div>
        </div>
        <div className="prose prose-lg mx-auto text-gray-700">
          <h4 className="text-2xl font-bold mb-4 text-center md:text-left">
            Platform Capabilities:
          </h4>
          <ul className="list-disc ml-8 space-y-2">
            <li>
              ✅ <span className="font-semibold">Vertical-Specific Training</span> – Deep-tune models using your proprietary data
            </li>
            <li>
              ✅ <span className="font-semibold">Multi-Channel Monetization</span> – SaaS licensing, pay-per-use API, enterprise contracts
            </li>
            <li>
              ✅ <span className="font-semibold">Compliance Engine</span> – Built-in regulatory adherence for your industry
            </li>
          </ul>
        </div>
      </section>
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
    image1: file(relativePath: { eq: "quantalogic-01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 780) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
