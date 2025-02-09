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
                        Become the Disruptor &nbsp; Not the Disrupted
                    </h1>
                }
                description={
                    <>
                        <p className="text-2xl font-bold tracking-wide leading-relaxed mb-6">
                            Transform Your Expertise into Unstoppable Vertical AI Agents
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
                primaryButtonUrl="/OurMission"
            />
            <section id="why" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-extrabold  mb-4 leading-tight">
                            WHY Vertical AI Agents?
                        </h2>
                        <h3 className="text-2xl font-medium text-gray-600 mb-8">
                            The Inevitable Shift in Competitive Advantage
                        </h3>
                        <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-12">
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <p className="text-2xl font-bold  mb-6">
                                Traditional businesses are collapsing.
                            </p>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                Legacy companies clinging to outdated models face extinction. Meanwhile, AI-first competitors are:
                            </p>
                            <ul className="space-y-6 ml-4">
                                <li className="flex items-start group">
                                    <span className="text-green-500 mr-4 text-2xl group-hover:scale-110 transition-transform">✅</span>
                                    <span className="text-xl leading-tight">
                                        <strong>Dominating markets</strong> by automating 80% of repetitive workflows
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-green-500 mr-4 text-2xl group-hover:scale-110 transition-transform">✅</span>
                                    <span className="text-xl leading-tight">
                                        <strong>Creating hyper-personalized services</strong> at scale
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-green-500 mr-4 text-2xl group-hover:scale-110 transition-transform">✅</span>
                                    <span className="text-xl leading-tight">
                                        <strong >Generating 24/7 revenue streams</strong> through AI-driven customer interactions
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                            <p className="text-2xl font-bold  mb-6">
                                Your proprietary knowledge is the ultimate weapon – but only if weaponized.
                            </p>
                            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                                ELITIZON exists to help domain experts like you:
                            </p>
                            <ul className="space-y-6 ml-4">
                                <li className="flex items-start group">
                                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">🔥</span>
                                    <span className="text-xl leading-tight">
                                        <strong >Crush generic AI solutions</strong> with vertical-specific agents
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">💡</span>
                                    <span className="text-xl leading-tight">
                                        <strong >Monetize your expertise</strong> through AI-as-a-Service models
                                    </span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-3xl mr-4 group-hover:scale-110 transition-transform">🛡️</span>
                                    <span className="text-xl leading-tight">
                                        <strong >Build moats</strong> competitors can't replicate
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <blockquote className="bg-primary-50 border-l-8 border-primary-500 pl-8 py-6 pr-6 rounded-r-2xl text-2xl italic leading-relaxed">
                            "The greatest risk isn't AI – it's being outpaced by those who harness it first."
                        </blockquote>
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <Subheading className="text-primary-600 font-semibold block mb-3">
                            Why Vertical AI Agents?
                        </Subheading>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                            For Innovators Who Refuse to Be Disrupted
                        </h2>
                        <div className="w-24 h-1 bg-primary-500 mx-auto mb-8"></div>
                    </div>

                    <div className="space-y-12">
                        <div className="transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-primary-600 mr-4 text-3xl">01</span>
                                    Outpace Legacy Competitors
                                </h3>
                                <p className="text-xl text-gray-600 leading-relaxed pl-12">
                                    Convert your hard-won knowledge into AI systems that operate at unprecedented speed and precision, leaving traditional approaches behind.
                                </p>
                            </div>
                        </div>

                        <div className="transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-primary-600 mr-4 text-3xl">02</span>
                                    Monetize What You Know
                                </h3>
                                <p className="text-xl text-gray-600 leading-relaxed pl-12">
                                    Build recurring revenue streams from AI Agents that scale your expertise 24/7, turning your knowledge into a sustainable competitive advantage.
                                </p>
                            </div>
                        </div>

                        <div className="transform hover:-translate-y-1 transition-transform duration-300">
                            <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                                    <span className="text-primary-600 mr-4 text-3xl">03</span>
                                    Future-Proof Your Business
                                </h3>
                                <p className="text-xl text-gray-600 leading-relaxed pl-12">
                                    Create intelligent systems that evolve with your industry's needs, ensuring long-term relevance and growth.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 px-8 py-12 bg-primary-50 rounded-xl">
                            <blockquote className="text-2xl font-medium text-gray-900 text-center italic">
                                "The greatest competitive risk isn't AI itself – it's watching others harness it first."
                                <footer className="mt-4 text-primary-600 font-semibold text-lg">
                                    Industry Insight
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>
            <div tw="mt-20"></div>
            <section className="max-w-screen-xl mx-auto my-24 px-4">
                <div className="text-center mb-16">
                    <span className="text-primary-600 font-semibold tracking-wide uppercase mb-3 block">
                        Vertical AI Solutions
                    </span>
                    <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
                        ELITZON's Vertical AI Advantage
                    </h3>
                    <p className="text-xl md:text-2xl font-medium text-gray-600 max-w-3xl mx-auto">
                        From Expertise to Execution
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="text-primary-600 mr-3 text-3xl">①</span>
                            For Established Enterprises
                        </h4>
                        <div className="space-y-4 text-lg text-gray-600">
                            <div className="font-semibold text-gray-800 mb-4">AI Agent Consulting & Development</div>
                            <div className="pl-6 space-y-3">
                                <div className="flex items-baseline">
                                    <span className="text-primary-600 mr-2">↳</span>
                                    Convert proprietary workflows into autonomous AI systems
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-primary-600 mr-2">↳</span>
                                    Deploy market-specific agents in &lt;12 weeks
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                            <span className="text-primary-600 mr-3 text-3xl">②</span>
                            For Domain Experts &amp; Startups
                        </h4>
                        <div className="space-y-4 text-lg text-gray-600">
                            <div className="font-semibold text-gray-800 mb-4">Co-Creation Partnerships</div>
                            <div className="pl-6 space-y-3">
                                <div className="flex items-baseline">
                                    <span className="text-primary-600 mr-2">↳</span>
                                    Jointly build vertical AI agents with our engineers
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-primary-600 mr-2">↳</span>
                                    Shared revenue model: Earn 40-70% of agent-generated income
                                </div>
                                <div className="flex items-baseline">
                                    <span className="text-primary-600 mr-2">↳</span>
                                    White-label solutions for rapid market entry
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg">
                    <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                        Platform Capabilities
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-white transition-colors duration-300">
                            <span className="text-green-500 text-xl">✅</span>
                            <div>
                                <span className="font-semibold block mb-2">Vertical-Specific Training</span>
                                <span className="text-gray-600">Deep-tune models using your proprietary data</span>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-white transition-colors duration-300">
                            <span className="text-green-500 text-xl">✅</span>
                            <div>
                                <span className="font-semibold block mb-2">Multi-Channel Monetization</span>
                                <span className="text-gray-600">SaaS licensing, pay-per-use API, enterprise contracts</span>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3 p-4 rounded-lg hover:bg-white transition-colors duration-300">
                            <span className="text-green-500 text-xl">✅</span>
                            <div>
                                <span className="font-semibold block mb-2">Compliance Engine</span>
                                <span className="text-gray-600">Built-in regulatory adherence for your industry</span>
                            </div>
                        </div>
                    </div>
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
