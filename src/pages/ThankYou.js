import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Page } from "../components/Page"

import ThankYouImage from "../images/undraw_true_love_cy8x.svg"

const ImageContainer = styled(tw.div`rounded w-full h-full`)`
  svg {
    ${tw`w-full h-full`} 
  }
`
export default (props) => {
  return (
    <Page {...props}>
      <div tw="w-full flex flex-col justify-center mt-10 py-20">
          <div tw="text-center">
            <span tw="sm:text-5xl text-4xl text-primary-500 font-bold">Thanks You !</span>
            <p tw="sm:text-3xl text-2xl font-light text-gray-600">We will get to you <span tw="text-gray-600 font-bold">within 24 hours.</span>  </p>
          </div>
      </div>
      <div tw="h-80 mt-8 mb-20">
        <ImageContainer><ThankYouImage/></ImageContainer>
      </div>
    </Page>
  )
}
