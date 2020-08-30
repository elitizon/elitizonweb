import React from "react"
import { Helmet } from "react-helmet"
import tw from "twin.macro"
import AnimationReveal from "../helpers/AnimationRevealPage"
import Footer from "./footers/FiveColumnWithInputForm"
import Header from "./headers/light"
import { SiteSEO } from "../components/misc/SiteSEO"

const StyledDiv = tw.div`font-display min-h-screen p-8 text-secondary-500 overflow-hidden`


export const Page = (props) => {
  return (
    <>
      <SiteSEO />
      <Helmet>
        <meta
          name="google-site-verification"
          content="N4LdLhQ5cz8mZT6WpTlr1nbdwcJ5QAri_1-8ftKtkyg"
        />
      </Helmet>
      <StyledDiv className="App">
        <Header noanimation />
        <AnimationReveal {...props} />
        <Footer noanimation />
      </StyledDiv>
    </>
  )
}
