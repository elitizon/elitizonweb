import React from "react"
import tw from "twin.macro"
import styled from "styled-components"
import { Page } from "../components/Page"

const IllustrationSvg = "/images/email-illustration.svg"

const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
])


export default () => {
  return (
    <Page>
      <div tw="w-full flex flex-col justify-center mt-10 py-20">
          <div tw="text-center">
            <span tw="sm:text-5xl text-4xl text-primary-500 font-bold">Thanks You !</span>
            <p tw="sm:text-3xl text-2xl font-light text-gray-600">We will get to you <span tw="text-gray-600 font-bold">within 24 hours.</span>  </p>
          </div>
      </div>
      <div tw="h-80 mt-8 mb-20">
          <Image imageSrc={IllustrationSvg} />
      </div>
    </Page>
  )
}
