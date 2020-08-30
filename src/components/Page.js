import React from "react"
import tw from "twin.macro"
import AnimationReveal from "../helpers/AnimationRevealPage"
import Footer from "./footers/FiveColumnWithInputForm"
import Header from "./headers/light"
import { SiteSEO } from "../components/misc/SiteSEO"

const StyledDiv = tw.div`font-poppins min-h-screen p-8 text-secondary-500 overflow-hidden`

export const Page = (props) => {
  return (
    <>
      <SiteSEO />
      <StyledDiv className="App">
        <Header noanimation />
        <AnimationReveal {...props} />
        <Footer noanimation />
      </StyledDiv>
    </>
  )
}
